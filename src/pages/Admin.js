import React, { useState, useEffect } from 'react';
import { UseAuth } from '../context/ContextAuth';
//import { UseGoods } from '../context/ContextGoods';

import { NavLink, useHistory } from 'react-router-dom';
import style from './Admin.module.css';

import GoogleButton from 'react-google-button';
import { storage, firestore } from '../firebase/firebaseConfig';
const Admin = () => {
  const history = useHistory();
  //const { good, getGoods } = UseGoods();
  const { CurrentUser, uidAdmin, AuthWithGoogle, Logout } = UseAuth();

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // const[disabled, setDisabled]= useState(true)
  const [url, setUrl] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [descriptionCategory, setdescriptionCategory] = useState('');
  useEffect(() => {
    if (!uidAdmin) {
      history.push('/user');
    }
  }, [uidAdmin]);

  const sendGoodParamsToFirebase = (e) => {
    e.preventDefault();

    const {
      textarea1: title,
      textarea2: description,
      textarea3: id,
      textarea4: price,
    } = e.target.elements;
    if (title.value !== '' && description.value !== '' && id.value !== '' && price.value !== '') {
      firestore.collection(descriptionCategory).doc(id.value).set({
        title: title.value,
        description: description.value,
        id: id.value,
        price: price.value,
        url,
      });
      title.value = '';
      description.value = '';
      id.value = '';
      price.value = '';
      console.log(title.value);
    } else {
      title.value = 'заполните поля';
      description.value = '';
      id.value = '';
      price.value = '';
      console.log('gtttttttt');
    }
    setDisabled(false);
  };
  // ----download image----
  const downloadImage = (e) => {
    let file = e.target.files[0];
    console.log(file.name);
    if (descriptionCategory !== '') {
      setDisabled(false);
    }
    // e.target.files[0] && setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(file));
    setImage(file);
  };

  const sendPhotoGoodToFirebase = (e) => {
    e.preventDefault();

    const upLoadImage = storage.ref(`${descriptionCategory}/${image.name}`).put(image);

    upLoadImage.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref(descriptionCategory)
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setImageUrl('фото загружено');
            setDisabled(false);
          });
      },
    );
  };
  const handleChangeOption = (e) => {
    console.log(imageUrl);
    setdescriptionCategory(e.currentTarget.value);
    if (image !== null) {
      setDisabled(false);
    }
  };

  return (
    <>
      <nav className="breadcrumb-nav">
        <div className="row">
          <div className="col s12">
            <NavLink to="/" className="breadcrumb flow-text-current">
              Главная
            </NavLink>
            <span className="breadcrumb flow-text-current">admin</span>
          </div>
        </div>
      </nav>

      {uidAdmin ? (
        <div className={style['admin-section']}>
          <h5>
            {CurrentUser && CurrentUser.displayName}
            <p>Вы вошли как администратор</p>
          </h5>
          <button
            className={`btn waves-effect waves-light brown lighten-1 ${style.button}`}
            type="button"
            onClick={Logout}>
            exit auth
          </button>
          <div className="row">
            <form className={`col s12 ${style.form}`} onSubmit={sendPhotoGoodToFirebase}>
              <div className="row">
                <h5 className={`${style.label}`}>
                  {' '}
                  {descriptionCategory
                    ? `фото будет загружено в категорию${descriptionCategory} `
                    : 'Выберите категорию товара'}
                </h5>
                <select
                  value={descriptionCategory}
                  className={`browser-default ${style.label}`}
                  onChange={handleChangeOption}>
                  <option value="" disabled>
                    Choose category
                  </option>
                  <option value="sport-kostums">sport-kostums</option>
                  <option value="pants">pants</option>
                  <option value="shorts">shorts</option>
                </select>
                <div className="input-field col s12 flow-text-current">
                  <input type="file" onChange={downloadImage} className={style.label}></input>
                </div>
                {image ? <img alt="foto" width="200" src={imageUrl}></img> : null}
                <button
                  disabled={disabled}
                  className={`btn waves-effect waves-light color-button ${style.label}`}
                  type="submit"
                  name="action">
                  загрузить фото
                  <i className="material-icons right">send</i>
                </button>
                {/* {descriptionCategory !== '' ? (
                 
                ) : null} */}
              </div>
            </form>
          </div>
          <div className="row">
            <form className={`col s12 ${style.form}`} onSubmit={sendGoodParamsToFirebase}>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1"> название товара</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="textarea2" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">описание товара</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="textarea3" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea3">id товара</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="textarea4" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea4">цена товара</label>
                </div>
                <button
                  className="btn waves-effect waves-light color-button"
                  type="submit"
                  name="action"
                  disabled={disabled}>
                  отправить данные о товаре
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <GoogleButton
          onClick={() => {
            AuthWithGoogle();
          }}
        />
      )}
    </>
  );
};

export default Admin;
