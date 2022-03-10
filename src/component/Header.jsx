import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { UseAuth } from '../context/ContextAuth';
import { NavLink, useHistory } from 'react-router-dom';
import { M } from '../InitMaterializeJavaScript';
import Logo from '../img/logo.png';
import styles from './header.module.css';
// let M;
// if (typeof window !== "undefined") {
//   M = require("materialize-css");
// }
//

const Header = () => {
  const { CurrentUser, uidAdmin, AuthWithGoogle, Logout } = UseAuth();
  const sidenav = useRef(null);

  const [instance, setInstances] = useState(null);

  let history = useHistory();
  useEffect(() => {
    let instance = M.Sidenav.init(sidenav.current);
    setInstances(instance);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className={'nav-wrapper color-nav ' + styles['nav-wrapper']}>
          <div>
            <img className={styles['brand-logo']} src={Logo} alt="logo" />
          </div>

          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/" className={styles.link}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={styles.link}>
                Каталог
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styles.link}>
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" className={styles.link}>
                user
              </NavLink>
            </li>

            {uidAdmin ? (
              <NavLink to="/admin" className={styles.link}>
                admin
              </NavLink>
            ) : null}
          </ul>
          {CurrentUser ? <img width="50px" alt="user" src={CurrentUser.photoURL}></img> : null}

          <div className={styles['block-social']}>
            {' '}
            <a href="viber://add?number=+380632483200" className={styles['link-cotial']}>
              <svg
                className={styles['fa-viber']}
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="viber"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg="">
                <path
                  fill="currentColor"
                  d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"></path>
              </svg>
            </a>
            <a
              className={styles['link-cotial']}
              href="https://www.instagram.com/bsportwear.ua"
              target="_blank"
              rel="noreferrer">
              <svg
                className={styles['fa-instagram']}
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg="">
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              className={styles['link-cotial']}
              href="https://www.facebook.com/bsportwear.ua"
              target="_blank"
              rel="noreferrer">
              <svg
                className={styles['fa-facebook']}
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg="">
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
          </div>
          {/*================ menu nav after main nav */}
        </div>
        {/*================ menu nav after main nav */}
        <div className={'nav-wrapper color-nav ' + styles['nav-wrapper-second']}>
          <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </NavLink>
          <ul className="hide-on-med-and-down">
            <li className="tab">
              <NavLink to="/kostums" className={styles.link}>
                Спотривные костюмы
              </NavLink>
            </li>
            <li className="tab ">
              <NavLink to="/pants" className={styles.link}>
                {' '}
                Спотривные штаны
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/shorts" className={styles.link}>
                Спортивные шорты
              </NavLink>
            </li>
            {/* <li>
              {" "}
              <span className="material-icons">settings_cell</span>
            </li>
            <li className="tab">
              <a href="tel:+380966729380">+38 (063) 248-32-00</a>
            </li> */}

            {/* <li className="tab">
              Email:bsportswear@gmail.com
              <a href="mailto:bsportswear@gmail.com">bsportswear@gmail.com</a>
            </li> */}
            {/* <ul className="footer-work">
              <li>График работы</li>
              <li>Пн-Сб: с 10:00 до 18:00</li>
              <li>Вс: Выходной</li>
            </ul> */}
          </ul>
          {uidAdmin ? 'Режим админ' : null}
          <div className={styles['tel-block']}>
            {' '}
            <span className="material-icons">settings_cell</span>{' '}
            <a className={styles['link-cotial']} href="tel:+380966729380">
              +38 (063) 248-32-00
            </a>
          </div>
        </div>
        ;
        {/* <div className="nav-wrapper color-nav">
          <NavLink to="#" className="sidenav-trigger">
            {" "}
          </NavLink>
          <p className="tab">Каталог</p>{" "}
        </div> */}
      </nav>

      {/* ==================drover side menu */}
      <ul ref={sidenav} className="sidenav color-sidenav" id="mobile-demo">
        <div className={styles.blocktel}>
          {' '}
          <a className={styles.link} href="tel:+380966729380">
            +38 (063) 248-32-00
          </a>
          <span
            onClick={() => {
              instance.close();
            }}
            className="material-icons">
            highlight_off
          </span>
        </div>
        <li> </li>
        <div className="divider"></div>
        <li
          onClick={() => {
            instance.close();
          }}>
          <NavLink className={styles.link} to="/">
            Главная
          </NavLink>
        </li>
        <div className="divider"></div>
        <li
          onClick={() => {
            instance.close();
          }}>
          <NavLink className={styles.link} to="/catalog">
            каталог
          </NavLink>
        </li>
        <li
          onClick={() => {
            instance.close();
          }}>
          <NavLink className={styles.link} to="/kostums">
            Спотривные костюмы
          </NavLink>
        </li>
        <li
          onClick={() => {
            instance.close();
          }}>
          <NavLink className={styles.link} to="/pants">
            {' '}
            Спотривные штаны
          </NavLink>
        </li>{' '}
        <li
          onClick={() => {
            instance.close();
          }}>
          <NavLink className={styles.link} to="/shorts">
            Спортивные шорты
          </NavLink>
        </li>
        <div className="divider"></div>
        <li
          onClick={() => {
            instance.close();
          }}>
          <NavLink className={styles.link} to="/about">
            Контакты
          </NavLink>
        </li>
        <li
          onClick={() => {
            instance.close();
          }}>
          <NavLink className={styles.link} to="/user">
            user
          </NavLink>
        </li>
        {uidAdmin ? (
          <li
            onClick={() => {
              instance.close();
            }}>
            <NavLink className={styles.link} to="/admin">
              аdmin
            </NavLink>
          </li>
        ) : null}
        <div className="divider"></div>
      </ul>
    </header>
  );
};

export default Header;

// <ul id="dropdown1" className="dropdown-content">
//   <li>
//     <NavLink to="/pants">Спотривные штаны</NavLink>
//   </li>
//   <li>
//     <NavLink to="kostums">Спотривные костюмы</NavLink>
//   </li>

//   <li>
//     <NavLink to="/hurt ">Спортивные шорты</NavLink>
//   </li>
// </ul>;
