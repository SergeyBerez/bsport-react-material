import React, { lazy, Suspense } from 'react';
import UseApi from '../hook/useApi';
//import Slider from "../component/Slider";
//import { NavLink, useHistory } from 'react-router-dom';
//import { UseGoods } from '../context/ContextGoods';
const Slider = lazy(() => import('../component/Slider.jsx'));

const Home = () => {
  // const { goodMainPage } = UseGoods();
  // console.log(goodMainPage);
  return (
    <>
      {' '}
      <Suspense fallback={<></>}>
        <div className="row">
          <div className="col s12">
            <h1 className="flow-text">главный конент</h1>
            <UseApi />
            <Slider></Slider>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Home;
