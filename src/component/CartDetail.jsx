import React, { useEffect } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
const CartDetail = ({ good }) => {
  const history = useHistory();
  const { id } = useParams();
  let oneGood = good.filter((item) => {
    return item.id === id;
  });
  useEffect(() => {
    if (good.length === 0) {
      history.push(history.location.pathname.replace(`/${id}`, ''));
    }
  }, []);

  return oneGood.map((good, i) => {
    return (
      <div key={i} className="card col s12 m6 l4 xl3">
        <button
          className="waves-effect waves-light btn-small"
          onClick={() => {
            history.push(`/catalog`);
          }}>
          <span className="material-icons">keyboard_arrow_left</span>
          на главную
        </button>
        <h5>{good.id} детальное описание</h5>
        <div className="card-image waves-effect waves-block waves-light">
          <img src={good.url} alt="goods" />
        </div>
        <div className="card-content">
          <p className="card-title text-darken-4 flow-text-card-title">{good.title}</p>
        </div>
        <div className="divider"></div>
        <div className="card-action">
          <div className="card-title text-darken-4">
            <b>
              {' '}
              {good.price} <span>грн</span>
            </b>
          </div>
          <button className="waves-effect waves-light btn-small">купить</button>
          {/* <span className="material-icons">shopping_bag</span> */}
        </div>
        <p>{good.description}</p>
      </div>
    );
  });
};

export default CartDetail;
