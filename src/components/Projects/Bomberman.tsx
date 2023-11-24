import React from "react";
import styles from "./Pacs.module.scss";
type Props = {};

const Bomberman = ({}: Props) => {
  return (
    <div className={styles.pacs}>
      <div className={styles.contentImage}>
        <img src="./images/portfolio/bomberman.png" alt="" />
      </div>
      <div className={styles.contentProject}>
        <div className={styles.contentTitle}>
          <h3>Bomberman Game</h3>
        </div>
        <div className={styles.text}>
          Bomberman is an arcade game with local multiplayer and single-player
          game modes.The game levels are comprised of open spaces to walk around
          a corner, safe from explosions.Also, there are destroyable blocks and
          persistent blocks.Each player can place bombs.Once a block is
          destroyed, a powerup may sometimes be found where the destroyable
          block once was.Powerups give the player bigger explosions and faster
          movement.These skills make finishing off the last opponents easier.
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
            <div className={styles.item}>1.Java</div>
            <div className={styles.item}>2.SCM: Gitlab</div>
          </div>
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>CUSTOMER</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>1.UET</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bomberman;
