import styles from "./CanvasAction.module.scss"
type Props = {}
const CanvasAction = ({}: Props) => {
  return (
    <canvas className={styles.canvas}></canvas>
  )
}

export default CanvasAction