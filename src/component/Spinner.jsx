import React from "react";
import styles from "./spinner.module.css";
const Spinner = () => {
  return (
    <>
      <p>загрузка...</p>
      <div className={"progress " + styles.progress}>
        <div className={"indeterminate " + styles.indeterminate}></div>
      </div>
      {/* <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Spinner;
