import { useEffect, useRef } from "react";
import styles from "./CanvasAction.module.scss";
import { drawLineCanvas } from "@/utils/drawLineCanvas";
type Props = {};
const CanvasAction = ({}: Props) => {
  const canvasRef: any = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      drawLineCanvas(canvasRef.current);
    }
  }, []);
  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};
export default CanvasAction;
