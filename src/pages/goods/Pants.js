import React, { useEffect } from 'react';
import { UseGoods } from '../../context/ContextGoods';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './goods.module.css';
const Pants = () => {
  const history = useHistory();
  const { good, getGoods } = UseGoods();
  useEffect(() => {
    getGoods('pants');
  }, []);

  const renderGoods = good.map((good) => {
    return (
      <div key={good.id} className="card col s12 m6 l4 xl3">
        <div
          onClick={() => {
            history.push(`/pants/${good.id}`);
          }}
          className="card-image waves-effect waves-block waves-light">
          <img src={good.url} alt="goods" />
        </div>
        <div className="card-content">
          <p className="card-title text-darken-4 flow-text-card-title">{good.title}</p>
          <span className="activator text-darken-4 flow-text-card-title">
            Подробно...<i className="material-icons right">more_vert</i>
          </span>
        </div>
        {/* <div className="divider"></div> */}
        <div className="card-action">
          <div className="card-title text-darken-4">
            <b>
              {' '}
              {good.price} <span>грн</span>
            </b>
          </div>
          <button className="waves-effect waves-light btn-small">купить</button>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i> {good.title}
          </span>
          <p className={styles.p}>{good.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <nav className="breadcrumb-nav">
        <div className="col s12">
          <NavLink to="/" className="breadcrumb flow-text-current">
            Главная
          </NavLink>
          <NavLink to="/catalog" className="breadcrumb flow-text-current">
            Каталог
          </NavLink>
          <span className="breadcrumb flow-text-current">Штаны</span>
        </div>
      </nav>
      <div className="row">{renderGoods}</div>
    </div>
  );
};

export default Pants;
