import React, { lazy, Suspense } from 'react';
import { UseAuth } from './context/ContextAuth';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UseGoods } from './context/ContextGoods';
import './App.css';

import Spinner from './component/Spinner.jsx';
// import User from './pages/User';
// import Home from "./pages/Home";
// import Pants from "./pages/goods/Pants";
// import Kostums from "./pages/goods/Kostums";
// import Shorts from "./pages/goods/Shorts";
//import { Helmet, HelmetProvider } from "react-helmet-async";
//const Spinner = lazy(() => import("./component/Spinner"));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/goods/Catalog'));
const Kostums = lazy(() => import('./pages/goods/Kostums'));
const Pants = lazy(() => import('./pages/goods/Pants'));
const Shorts = lazy(() => import('./pages/goods/Shorts'));
const About = lazy(() => import('./pages/About'));
const Admin = lazy(() => import('./pages/Admin'));
const User = lazy(() => import('./pages/User.jsx'));
const Slider = lazy(() => import('./component/Slider.jsx'));
const CartDetail = lazy(() => import('./component/CartDetail.jsx'));

function Main() {
  const { CurrentUser } = UseAuth();
  const { good } = UseGoods();

  return (
    <>
      {' '}
      <main className="main">
        <div className="container">
          <Suspense fallback={<Spinner></Spinner>}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Home></Home>;
                }}></Route>

              <Route
                path="/catalog"
                render={() => {
                  return <Catalog></Catalog>;
                }}></Route>
              <Route
                path="/pants/:id"
                render={() => {
                  return <CartDetail good={good}></CartDetail>;
                }}></Route>
              <Route
                path="/pants"
                render={() => {
                  return <Pants></Pants>;
                }}></Route>

              <Route
                path="/kostums/:id"
                render={() => {
                  return <CartDetail good={good}></CartDetail>;
                }}></Route>
              <Route
                path="/kostums"
                render={() => {
                  return <Kostums></Kostums>;
                }}></Route>

              <Route
                path="/shorts/:id"
                render={() => {
                  return <CartDetail good={good}></CartDetail>;
                }}></Route>

              <Route
                path="/shorts"
                render={() => {
                  return <Shorts good={good}></Shorts>;
                }}></Route>

              <Route
                path="/slider"
                render={() => {
                  return <Slider></Slider>;
                }}></Route>
              <Route
                path="/about"
                render={() => {
                  return <About></About>;
                }}></Route>
              <Route
                path="/admin"
                render={() => {
                  return <Admin></Admin>;
                }}></Route>
              <Route
                path="/user"
                render={() => {
                  return <User></User>;
                }}></Route>
              <Redirect to="/"> </Redirect>
            </Switch>
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default Main;
