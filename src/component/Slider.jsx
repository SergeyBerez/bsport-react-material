import { useEffect, useRef, useState } from 'react';
// import styles from "../styles/slider.module.css";
import styles from './slider.module.css';
import { M } from '../InitMaterializeJavaScript';
import Img1 from '../img/goods/IMG_3273.jpg';
import Img2 from '../img/goods/IMG_3504.jpg';
// let M;
// if (typeof window !== "undefined") {
//   M = require("materialize-css");
// }

const Slider = (props) => {
  console.log(props);
  const carousel = useRef(null);
  const [instance, setInstances] = useState(null);
  useEffect(() => {
    let instance = M.Carousel.init(carousel.current, {
      //
      indicators: true,
      noWrap: false,
    });

    setInstances(instance);
  }, []);

  return (
    <section className={styles.blockSlider}>
      <div ref={carousel} className="carousel carousel-slider">
        <div className={styles['div-slider']}>
          <a className="carousel-item" href="#one!">
            <img className={styles.img} src={Img1} alt="author" />
          </a>
        </div>
        <div className={styles['div-slider']}>
          <a className="carousel-item" href="#two!">
            <img className={styles.img} src={Img2} alt="author" />
          </a>
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <button
          className={'btn-floating waves-effect waves-light btn color-button'}
          onClick={() => {
            instance.prev();
          }}>
          <i className="material-icons">arrow_back</i> prev
        </button>
        <button
          className={'btn-floating waves-effect waves-light btn color-button'}
          onClick={() => {
            instance.next();
          }}>
          <i className="material-icons">arrow_forward</i>next
        </button>
      </div>
    </section>
  );
};

export default Slider;

// import React from 'react';

// const Slider = () => {
//   return (
//     <div>

//     </div>
//   );
// }

// export default Slider;
