import React from "react";
import styles from "./Home.module.scss";
type Props = {};

const Home = ({}: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src="./images/avatar.jpg" alt="" />
        </div>
        <div className={styles.extract}>
          <h5>Hello, I'm Tran Van Hung</h5>
          <h1>
            <span className={styles.typing}>Web Developer</span>
          </h1>
          <p>
            I'm a Fullstack Developer based In Vietnam, over 4 years of
            professional experience.
          </p>
          <div className={styles.social}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
