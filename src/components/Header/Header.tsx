import React from "react";
import styles from "./Header.module.scss";
type Props = {};
const Header = ({}: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Van Hung T.</div>
      <div className={styles.menu}>ABC</div>
    </div>
  );
};

export default Header;
