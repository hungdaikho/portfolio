import React, { useEffect, useRef } from "react";
import styles from "./Home.module.scss";
import { ISocial } from "@/models/reducers/social.model";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { typingEffect } from "@/utils/typingEffect";
type Props = {};

const Home = ({}: Props) => {
  const typingRef: any = useRef();
  const cursor: any = useRef();
  const social: Array<ISocial> = useAppSelector(
    (state: RootState) => state.social
  );
  useEffect(() => {
    if (typingRef.current && cursor.current) {
      typingEffect(typingRef.current, cursor.current);
    }
  }, []);
  const onDownloadCv = () => {
    const url = "tranvanhung.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = "VanHungT.CV.pdf";
    link.click();
  };
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src="./images/avatar1.jpg" alt="" />
        </div>
        <div className={styles.extract}>
          <h5>Hello, I'm Tran Van Hung</h5>
          <h1>
            <span className={styles.typing} ref={typingRef}></span>
            <span className={styles.cursorTyping} ref={cursor}></span>
          </h1>
          <p>
            I'm a Fullstack Developer based In Vietnam, over 4 years of
            professional experience.
          </p>
          <div className={styles.social}>
            {social.map((s: ISocial) => {
              return (
                <div
                  key={s.value}
                  className={styles.socialItem}
                  onClick={() => {
                    window.open(s.link);
                  }}
                >
                  <img src={s.src} alt="" />
                </div>
              );
            })}
          </div>
          <div
            className={styles.download}
            onClick={() => {
              onDownloadCv();
            }}
          >
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
