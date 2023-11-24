import React, { useState } from "react";
import styles from "./Header.module.scss";
import { IMenu } from "@/models/reducers/menu.model";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { changeActiveMenu } from "@/reducers/menuSlice";
type Props = {
  scroll: boolean;
};
const Header = ({ scroll }: Props) => {
  const menu: Array<IMenu> = useAppSelector((state: RootState) => state.menu);
  const dispatch = useAppDispatch();
  const [activeMenu, setActiveMenu] = useState(false);
  const onChangeMenuActive = (value: any) => {
    dispatch(changeActiveMenu(value));
  };
  return (
    <div className={`${styles.header} ${scroll && styles.headerFixed}`}>
      <div className={styles.headerLogo}>Van Hung T.</div>
      <div
        className={`${styles.horizontalMenu} ${activeMenu && styles.menuOpen}`}
      >
        <div className={styles.logo}>Van Hung T.</div>
        <div className={styles.menu}>
          {menu.map((item: IMenu) => {
            return (
              <div
                className={`${styles.menuItem} ${
                  item.active && styles.menuItemActive
                }`}
                key={item.value}
                onClick={() => {
                  onChangeMenuActive(item.value);
                  document
                    .getElementById(item.value)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  if (activeMenu) {
                    setActiveMenu(false);
                  }
                }}
              >
                <img src={item.src} alt="" />
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.verticalMenu}>
        <div
          className={`${styles.toggle} ${activeMenu && styles.active}`}
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
