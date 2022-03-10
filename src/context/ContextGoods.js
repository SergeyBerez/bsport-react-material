import React, { useContext, useState, useEffect } from 'react';
import { firestore } from '../firebase/firebaseConfig';
const Context = React.createContext();

export const UseGoods = () => {
  return useContext(Context);
};

export default function ContextGoodsProvider({ children }) {
  const [good, setGood] = useState([
    // {
    //   id: 'aaaa',
    //   title: ' helod',
    //   url: '',
    //   description: '',
    //   price: '0',
    // },
  ]);
  const [goodMainPage, setGoodMainPage] = useState([]);
  const getGoods = (param) => {
    const ref = firestore.collection(param);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      console.log('getGoods----------', items);
      setGood(items);
    });
  };

  useEffect(() => {
    console.log('useEffectset goods', good);
    // const ref = firestore.collection('sport-kostums');
    // ref.onSnapshot((querySnapshot) => {
    //   const items = [];
    //   querySnapshot.forEach((doc) => {
    //     items.push(doc.data());
    //   });
    //   // console.log(items);
    //   //setGood(items);
    //     setGoodMainPage(items);
    // });
    const fetchDataGood = async () => {
      const data = await firestore.collection('spells').get();
      console.log(data);
      //console.log(Object.keys(data).map((doc) => doc.data()));
      //  setGood(Object.keys(data).map((doc) => doc.data()));
    };
    // fetchDataGood();
  }, []);

  return <Context.Provider value={{ good, goodMainPage, getGoods }}>{children}</Context.Provider>;
}

// export default ContextGoodsProvider;
