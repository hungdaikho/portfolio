import React from "react";
import styles from "./Pacs.module.scss";
type Props = {};

const WebSpeech = ({}: Props) => {
  return (
    <div className={styles.pacs}>
      <div className={styles.contentImage}>
        <img src="./images/portfolio/webspeech.png" alt="" />
      </div>
      <div className={styles.contentProject}>
        <div className={styles.contentTitle}>
          <h3>Schoolup - Web Speech API</h3>
        </div>
        <div className={styles.text}>
          This is an application serving pronunciation learning at a school in
          France. The way it works is to listen to the user's pronunciation,
          evaluate the accuracy and respond to the best answer. Test in{" "}
          <a href="https://school-up-be.web.app/" target="_blank">
            Schoolup
          </a>
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>MY POSITION</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>Fullstack Developer</div>
          </div>
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>TECHNOLOGIES USED</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>1.React Typescript - Hooks</div>
            <div className={styles.item}>2.React-Redux</div>
            <div className={styles.item}>3.Web Speech</div>
            <div className={styles.item}>4.Redux-thunk, middleware</div>
            <div className={styles.item}>5.Material UI</div>
            <div className={styles.item}>6.SCM: Github</div>
            <div className={styles.item}>
              7.Software Methodology: Agile, Scrum
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSpeech;
