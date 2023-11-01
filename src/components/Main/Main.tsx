import React from "react";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className="title">
        <img src="/images/thang.png" alt="" />
        <span>projects</span>
      </div>
    </div>
  );
};

export default Main;
