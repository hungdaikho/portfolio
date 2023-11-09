import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./Portfolio.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Props = {};
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const Portfoli = ({}: Props) => {
  const boundRef: any = useRef();
  useEffect(() => {
    const bound: any = boundRef.current.getBoundingClientRect();
    boundRef.current.style.height = `${bound.width / 3}px`;
  }, []);
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.title}>Project</div>
        <div className={styles.subTitle}>All my project by me</div>
        <div className={styles.content} ref={boundRef}>
          <Slider {...settings}>
            <div className={styles.item}>
              <div className={styles.card}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.card}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.card}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.card}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.card}></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfoli;
