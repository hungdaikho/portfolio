import React from "react";
import styles from "./Service.module.scss";
import { IService } from "@/models/reducers/service.model";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
type Props = {};
const Service = ({}: Props) => {
  const service: Array<IService> = useAppSelector(
    (state: RootState) => state.service
  );
  return (
    <div className={styles.service} id="service">
      <div className={styles.container}>
        <div className={styles.title}>What I Do</div>
        <div className={styles.content}>
          <div className={styles.serviceItems}>
            {service.map((s: IService) => {
              return (
                <div className={styles.item} key={s.value}>
                  <div className={styles.hover}>
                    <div className={styles.icon}>
                      <img src={s.url} alt="" />
                    </div>
                    <div className={styles.title}>{s.title}</div>
                    <div className={styles.subTitle}>See more</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
