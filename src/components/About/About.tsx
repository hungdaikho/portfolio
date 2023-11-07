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
              <p>
                During 4 years of working, I have been perfecting more skills
                for myself.
              </p>
              <div className={styles.wrapper}>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>React.Js</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.react}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>Next.Js</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.next}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>Express</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.express}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>Nest.Js</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.nest}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>Figma</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.figma}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>Javascript</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.javascript}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>PHP</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.php}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>Wordpress</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.wordpress}`}
                    ></div>
                  </div>
                </div>
                <div className={styles.wrapperItem}>
                  <span className={styles.label}>Git</span>
                  <div className={styles.experienceBound}>
                    <div
                      className={`${styles.experienceBar} ${styles.git}`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className={styles.seeMore}>
                <button>See More</button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <img src="./images/avatar2.jpg" alt="" />
              <div className={styles.experience}>
                <div className={styles.info}>
                  <h3>4+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
