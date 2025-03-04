import React from "react";
import styles from "./Pacs.module.scss";
type Props = {};

const Videoconference = ({}: Props) => {
  return (
    <div className={styles.pacs}>
      <div className={styles.contentImage}>
        <img src="./images/portfolio/videoconference.jpg" alt="" />
      </div>
      <div className={styles.contentProject}>
        <div className={styles.contentTitle}>
          <h3>Video Conference - Telemedic </h3>
        </div>
        <div className={styles.text}>
          This is an online meeting platform that allows many people to be
          connected over long distances same Zoom and Google Meeting. Provided
          that the user needs to be equipped with at least one electronic mobile
          device, such as a computer, tablet or smartphone, and also needs an
          internet connection to be able to use it. Extremely high load
          capacity, providing video quality up to 8k60fps, time limitless and
          horizontally scalable.
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>MY POSITION</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>1.Core Library Design Engineer</div>
            <div className={styles.item}>2.Project Manager</div>
            <div className={styles.item}>2.Fullstack Developer</div>
          </div>
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>TECHNOLOGIES USED</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>1.React Typescript</div>
            <div className={styles.item}>2.Nest Typescript</div>
            <div className={styles.item}>3.React-Redux</div>
            <div className={styles.item}>4.WebRTC</div>
            <div className={styles.item}>5.WebContext</div>
            <div className={styles.item}>6.Redux-thunk, middleware</div>
            <div className={styles.item}>7.Ant Design</div>
            <div className={styles.item}>8.SCM: Gitlab</div>
            <div className={styles.item}>
              9.Software Methodology: Agile, Scrum
            </div>
          </div>
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>CUSTOMER</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>1.K Central Hospital</div>
            <div className={styles.item}>2.A Thai Nguyen Hospita</div>
            <div className={styles.item}>3.Medlatec General Hospital</div>
            <div className={styles.item}>4.Tâm Anh General Hospital</div>
            <div className={styles.item}>5.Lung central hospital</div>
            <div className={styles.item}>....</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoconference;
