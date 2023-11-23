import React, { useRef } from "react";
import styles from "./modal.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setModal } from "@/reducers/modalSlice";
import { defaultModal } from "@/models/modal.model";
type Props = {};
const Modal = ({}: Props) => {
  const modalRef: any = useRef();
  const modal = useAppSelector((state: RootState) => state.modal);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${styles.modal} ${modal.open && styles.modalOpen}`}
      onClick={(event: any) => {
        if (event.target !== modalRef.current) {
          dispatch(setModal(defaultModal));
        }
      }}
    >
      <div className={styles.modalMain} style={{ width: modal.width }}>
        <button
          className={styles.closeBtn}
          onClick={() => {
            dispatch(setModal(defaultModal));
          }}
        >
          X
        </button>
        <div className={styles.modalContent} ref={modalRef}>
          {modal.content}
        </div>
      </div>
    </div>
  );
};
export default Modal;
