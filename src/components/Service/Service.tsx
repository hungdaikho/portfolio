import React from "react";
import styles from "./Service.module.scss";
import { title } from "process";
type Props = {};

const Service = ({}: Props) => {
  return (
    <div className={styles.service}>
      <div className={styles.container}>
        <div className={styles.title}>What I Do ?</div>
      </div>
    </div>
  );
};

export default Service;
