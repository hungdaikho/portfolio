import React from "react";
import styles from "./Certificate.module.scss";
type Props = {};

const Certificate = ({}: Props) => {
  return (
    <div className={styles.certificate}>
      <div className={styles.container}>
        <div className={styles.title}>Certificate</div>
      </div>
    </div>
  );
};

export default Certificate;
