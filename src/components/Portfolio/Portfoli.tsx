import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./Portfolio.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppDispatch } from "@/redux/hook";
import { setModal } from "@/reducers/modalSlice";
import Pacs from "../Projects/Pacs";
import Videoconference from "../Projects/VideoConference";
import WebSpeech from "../Projects/WebSpeech";
import CitizenV from "../Projects/CitizenV";
import Bomberman from "../Projects/Bomberman";
type Props = {};
const Portfoli = ({}: Props) => {
  const boundRef: any = useRef();
  const dispatch = useAppDispatch();
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  useEffect(() => {
    const bound: any = boundRef.current.getBoundingClientRect();
    if (bound.width > 800) {
      boundRef.current.style.height = `${bound.width / 3}px`;
    } else {
      boundRef.current.style.height = `${bound.width}px`;
      setSettings({ ...settings, slidesToShow: 1 });
    }
    window.onresize = (e) => {
      const bound: any = boundRef.current.getBoundingClientRect();
      if (bound.width > 800) {
        boundRef.current.style.height = `${bound.width / 3}px`;
        setSettings({ ...settings, slidesToShow: 3 });
      } else {
        boundRef.current.style.height = `${bound.width}px`;
        setSettings({ ...settings, slidesToShow: 1 });
      }
    };
  }, []);

  return (
    <div className={styles.portfolio} id="project">
      <div className={styles.container}>
        <div className={styles.title}>Project</div>
        <div className={styles.subTitle}>Some projects I have worked on</div>
        <div className={styles.content} ref={boundRef}>
          <Slider {...settings}>
            <div className={styles.item}>
              <div
                className={styles.card}
                onClick={() => {
                  dispatch(
                    setModal({
                      open: true,
                      width: "80%",
                      content: <Pacs />,
                    })
                  );
                }}
              >
                <img src="./images/portfolio/vrpacs.jpg" alt="" />
                <p className={styles.cardTitle}>VrPacs - Pathology</p>
              </div>
            </div>
            <div className={styles.item}>
              <div
                className={styles.card}
                onClick={() => {
                  dispatch(
                    setModal({
                      open: true,
                      width: "80%",
                      content: <Videoconference />,
                    })
                  );
                }}
              >
                <img src="./images/portfolio/videoconference.jpg" alt="" />
                <p className={styles.cardTitle}>Video Conference</p>
              </div>
            </div>
            <div className={styles.item}>
              <div
                className={styles.card}
                onClick={() => {
                  dispatch(
                    setModal({
                      open: true,
                      width: "80%",
                      content: <WebSpeech />,
                    })
                  );
                }}
              >
                <img src="./images/portfolio/webspeech.png" alt="" />
                <p className={styles.cardTitle}>Web Speech API</p>
              </div>
            </div>
            <div className={styles.item}>
              <div
                className={styles.card}
                onClick={() => {
                  dispatch(
                    setModal({
                      open: true,
                      width: "80%",
                      content: <CitizenV />,
                    })
                  );
                }}
              >
                <img src="./images/portfolio/citizen.png" alt="" />
                <p className={styles.cardTitle}>Citizen Manager App</p>
              </div>
            </div>
            <div className={styles.item}>
              <div
                className={styles.card}
                onClick={() => {
                  dispatch(
                    setModal({
                      open: true,
                      width: "80%",
                      content: <Bomberman />,
                    })
                  );
                }}
              >
                <img src="./images/portfolio/bomberman.png" alt="" />
                <p className={styles.cardTitle}>Bomberman Game</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfoli;
