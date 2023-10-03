import styles from "./WelCome.module.scss";
type Props = {};
const WelCome = ({}: Props) => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeContent}>
        <div className={styles.text}>
          <span>Hi There ! I'm Hung</span>
          <span>I'm a Full Stack Web Developer</span>
        </div>
        <div className={styles.image}>
          <div className={styles.imageContent}>
            <img src="/images/avatar1.png" alt="" />
          </div>
          <div className={styles.imageFooter}>
            <img src="/images/portfolio.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.welcomeTitle}>
        <div className={styles.bounder}>
          <div className={styles.titleContent}>
            <span>A journey of a thousand miles begins with a single step</span>
          </div>
          <div className={styles.titleOwner}>
            <span>Laozi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WelCome;
