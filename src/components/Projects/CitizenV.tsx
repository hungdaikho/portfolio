import React from "react";
import styles from "./Pacs.module.scss";
type Props = {};

const CitizenV = ({}: Props) => {
  return (
    <div className={styles.pacs}>
      <div className={styles.contentImage}>
        <img src="./images/portfolio/vrpacs.jpg" alt="" />
      </div>
      <div className={styles.contentProject}>
        <div className={styles.contentTitle}>
          <h3>CitizenV Manager</h3>
        </div>
        <div className={styles.text}>
          This is a system that provides the ability to display and process
          super-resolution images ( such as earth map, cancer cell map in
          pathology... ) on any internet connected device
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
            <div className={styles.item}>1.React Typescript</div>
            <div className={styles.item}>2.React-Redux</div>

            <div className={styles.item}>3.Redux-thunk, middleware</div>
            <div className={styles.item}>4.Ant Design</div>
            <div className={styles.item}>5.SCM: Gitlab</div>
            <div className={styles.item}>
              6.Software Methodology: Agile, Scrum
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

export default CitizenV;
