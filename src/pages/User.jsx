import React, { useEffect } from 'react';
import style from './Admin.module.css';
import { UseAuth } from '../context/ContextAuth';
import GoogleButton from 'react-google-button';
import { useHistory } from 'react-router-dom';
const User = () => {
  const { CurrentUser, AuthWithGoogle, Logout } = UseAuth();
  const history = useHistory();
  useEffect(() => {
    if (CurrentUser) {
      if (CurrentUser.uid === 'zhRekAJUBhh17kezzpp5OiHE4VW2') {
        history.push('/admin');
      }
    }
  }, [CurrentUser]);
  return (
    <>
      {CurrentUser ? (
        <div className={style.sectionUser}>
          {' '}
          <h3>Вы зарегистрировались как {CurrentUser && CurrentUser.displayName}</h3>
          <img alt="user" src={CurrentUser.photoURL}></img>
          <p>теперь вы сможете совершать покупки</p>
          <button
            className={`btn waves-effect waves-light brown lighten-1`}
            type="button"
            onClick={Logout}>
            exit auth
          </button>
        </div>
      ) : (
        <div className={style.sectionUser}>
          <GoogleButton
            onClick={() => {
              AuthWithGoogle();
            }}
          />
        </div>
      )}
    </>
  );
};

export default User;
