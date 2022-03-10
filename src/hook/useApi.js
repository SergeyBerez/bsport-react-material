import React, { useState, useEffect } from 'react';

export default function useApi(url) {
  const [good, setGood] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/SergeyBerez/server/getGoods')
      .then((data) => {
        return data.json();
      })
      .then((data1) => {
        console.log(data1);
        setGood(data1);
      });
    //     async function getDat() {
    //  await  axios('https://my-json-server.typicode.com/SergeyBerez/server/getGoods')
    // }
  }, []);

  // let d = good.map((data) => {
  //   return data.id;
  // });

  return (
    <div>
      {good.map((item) => {
        return <p>{item.id}</p>;
      })}
    </div>
  );
}
