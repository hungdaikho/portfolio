import React from "react";
import styles from "./Header.module.scss";
import { Button } from "antd";
import { FastForwardOutlined } from "@ant-design/icons";
import { IMenu } from "@/models/Menu.model";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { changeActiveMenu } from "@/reducers/MenuReducer";
type Props = {};
const Header = ({}: Props) => {
  const menus: Array<IMenu> = useAppSelector((state: RootState) => state.menu);
  const dispatch = useAppDispatch();
  const onChangeActiveMenu = (id: number) => {
    dispatch(changeActiveMenu(id) as any);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Button className={styles.btn} icon={<FastForwardOutlined />} />
      </div>
      <div className={styles.menu}>
        {menus.map((menu: IMenu) => {
          return (
            <div
              className={menu.active ? styles.menuItemActive : styles.menuItem}
              onClick={() => {
                onChangeActiveMenu(menu.id);
              }}
            >
              <img src="/images/thang.png" alt="" />
              {menu.name}
            </div>
          );
        })}
        <div className={styles.menuItem}></div>
      </div>
    </div>
  );
};

export default Header;
