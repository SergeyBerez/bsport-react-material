import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
//import Helmet from 'react-helmet';
//import { Helmet, HelmetProvider } from "react-helmet-async";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ContextAuthProvider } from './context/ContextAuth';
import ContextGoodsProvider from './context/ContextGoods';
import './index.css';
//import Main from './App';
//import Logo from './img/logo.png';
//import Icon from './img/favicons/favicon.ico';
import reportWebVitals from './reportWebVitals';

//const Spinner = lazy(() => import("./component/Spinner"));
const Header = lazy(() => import('./component/Header'));
const Footer = lazy(() => import('./pages/Footer'));
const Main = lazy(() => import('./App'));

const app = (
  <React.StrictMode>
    <ContextAuthProvider>
      <ContextGoodsProvider>
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>B-sportwear</title>
          <meta name="theme-color" content="#008f68" />
          <meta
            name="description"
            content="спортивные штаны дешево оптом розница турция"
          />
          <link rel="apple-touch-icon" href={Logo} />
          <link rel="icon" href={Icon} />
          <link rel="canonical" href="http://b-sportwear-shop.web.app" />
        </Helmet> */}
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <Header></Header>
          </Suspense>
          <Suspense fallback={<></>}>
            <Main></Main>
          </Suspense>

          <Suspense fallback={<></>}>
            <Footer></Footer>
          </Suspense>
        </BrowserRouter>
      </ContextGoodsProvider>
    </ContextAuthProvider>
  </React.StrictMode>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
// const render = () => {
//   const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
//   renderMethod(app, document.getElementById("root"));
// };
// render();
//ReactDOM.hydrate(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
