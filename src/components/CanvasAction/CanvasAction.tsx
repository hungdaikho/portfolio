import { useEffect } from "react";
import styles from "./CanvasAction.module.scss";
import { drawLineCanvas } from "@/utils/drawLineCanvas";
type Props = {};
const CanvasAction = ({}: Props) => {
  useEffect(() => {
    drawLineCanvas();
  }, []);
  return <canvas className={styles.canvas} id="canvas"></canvas>;
};
export default CanvasAction;
