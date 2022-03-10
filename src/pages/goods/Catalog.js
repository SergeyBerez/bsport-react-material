import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import styles from './goods.module.css';
import Img from '../../img/goods/IMG_3193.jpg';
//import styles from "./goods.module.css";
const Catalog = () => {
  const history = useHistory();
  return (
    <>
      <nav className="breadcrumb-nav">
        <div className="nav-wrapper">
          <div className="col s12">
            <NavLink to="/" className="breadcrumb flow-text-current">
              Главная
            </NavLink>
            <span className="breadcrumb flow-text-current">Каталог</span>
          </div>
        </div>
      </nav>
      <h5> Вся продукция</h5>
      <div className="row">
        <div
          className="card col s6 m4 l4 "
          onClick={() => {
            history.push('/kostums');
          }}>
          <div className="card-image">
            <img src={Img} alt="goods" />
          </div>

          <div className="card-content">
            <p className=""> Спортивные костюмы</p>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light color-button" type="button" name="buy">
              смотреть все костюмы
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            history.push('/pants');
          }}
          className="card col s6 m4 l4">
          <div className="card-image">
            <img src={Img} alt="goods" />
          </div>

          <div className="card-content">
            <p className=""> Спортивные штаны</p>
          </div>

          <div className="card-action">
            <button className="btn waves-effect waves-light color-button" type="button" name="buy">
              смотреть все штаны
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            history.push('/shorts');
          }}
          className="card col s6 m4 l4">
          <div className="card-image">
            <img src={Img} alt="goods" />
          </div>

          <div className="card-content">
            <p className=""> Спортивные шорты</p>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light color-button" type="button" name="buy">
              смотреть все шорты
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
