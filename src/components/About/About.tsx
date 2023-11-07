import React from "react";
import styles from "./About.module.scss";
type Props = {};

const About = ({}: Props) => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h3 className={styles.title}>About Me</h3>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.info}>
              <h3>
                Hi, I'm <span>Tran Van Hung</span>
              </h3>
              <p>
                Im a Freelancer Front-end Developer with over 4 years of
                experience. Im from Ha Noi. I code and create web elements for
                amazing people around the world. I like work with new people.
              </p>
            </div>
            <div className={styles.skills}>
              <h3>What is my skill level ?</h3>
            </div>
          </div>
          <div className={styles.right}>LEFT</div>
        </div>
      </div>
    </div>
  );
};

export default About;
