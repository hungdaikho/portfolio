import React from "react";
import styles from "./Contact.module.scss";
type Props = {};

const Contact = ({}: Props) => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title}>Contact</div>
        <div className={styles.subTitle}>Connect me to your work</div>
        <div className={styles.content}>
          <div className={styles.contactBound}>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <h3>Phone</h3>
                <p>+94986003747</p>
              </div>
            </div>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <h3>Email</h3>
                <p>tranvanhungvx@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <h3>Address</h3>
                <p>Ha Noi, Viet Nam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
