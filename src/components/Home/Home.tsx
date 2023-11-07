import React from "react";
import styles from "./Home.module.scss";
import { ISocial } from "@/models/reducers/social.model";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
type Props = {};

const Home = ({}: Props) => {
  const social: Array<ISocial> = useAppSelector(
    (state: RootState) => state.social
  );
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src="./images/avatar1.jpg" alt="" />
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
          <div className={styles.social}>
            {social.map((s: ISocial) => {
              return (
                <div key={s.value} className={styles.socialItem}>
                  <img src={s.src} alt="" />
                </div>
              );
            })}
          </div>
          <div className={styles.download}>Download CV</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
