import React, { useContext, useState, useEffect } from 'react';
import firebase, { authFirebase } from '../firebase/firebaseConfig';
const Context = React.createContext();
function UseAuth() {
  return useContext(Context);
}

function ContextAuthProvider({ children }) {
  // const [CurrentUserAuth, setAuth] = useState("");
  const [CurrentUser, setUser] = useState(null);
  const [uidAdmin, setUidAdmin] = useState(null);

  useEffect(() => {
    authFirebase.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        if (user.uid === 'zhRekAJUBhh17kezzpp5OiHE4VW2') {
          setUidAdmin(true);
        }
      } else {
        setUidAdmin(false);
      }
    });
  }, []);

  const Logout = () => {
    authFirebase.signOut();
  };
  const AuthWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    authFirebase
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        //backToMainPage();
        // authisLogged()
        // SetvalutInputs({
        //   email: "",
        //   password: "",
        // });

        //SetmessageFormFirebase(user.email, user.displayName);
        // localStorage.setItem(
        //     "LOGIN_USER",
        //     JSON.stringify({
        //         name: user.displayName,
        //         id: user.uid,
        //         localId: user.l,
        //         email: user.email,
        //         token,
        //     })
        // )
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <Context.Provider value={{ CurrentUser, uidAdmin, AuthWithGoogle, Logout }}>
      {children}
    </Context.Provider>
  );
}

export { ContextAuthProvider, UseAuth };
