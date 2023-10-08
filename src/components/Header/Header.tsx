import React from "react";
import styles from "./Header.module.scss";
import { Button, Dropdown, MenuProps } from "antd";
import { FastForwardOutlined, MenuOutlined } from "@ant-design/icons";
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
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button
          className="dropdownBtn"
          icon={<img src="/images/thang.png" alt="" />}
        >
          Home
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          className="dropdownBtn"
          icon={<img src="/images/thang.png" alt="" />}
        >
          About
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          className="dropdownBtn"
          icon={<img src="/images/thang.png" alt="" />}
        >
          Skills
        </Button>
      ),
    },
    {
      key: "4",
      label: (
        <Button
          className="dropdownBtn"
          icon={<img src="/images/thang.png" alt="" />}
        >
          Projects
        </Button>
      ),
    },
    {
      key: "5",
      label: (
        <Button
          className="dropdownBtn"
          icon={<img src="/images/thang.png" alt="" />}
        >
          Contacts
        </Button>
      ),
    },
  ];
  return (
    <div className={styles.boundHeader}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Button className={styles.btn} icon={<FastForwardOutlined />} />
        </div>
        <div className={styles.menuMobile}>
          <Dropdown menu={{ items }}>
            <MenuOutlined size={36} />
          </Dropdown>
        </div>
        <div className={styles.menu}>
          {menus.map((menu: IMenu) => {
            return (
              <div
                className={
                  menu.active ? styles.menuItemActive : styles.menuItem
                }
                onClick={() => {
                  onChangeActiveMenu(menu.id);
                }}
                key={menu.id}
              >
                <img src="/images/thang.png" alt="" />
                {menu.name}
              </div>
            );
          })}
          <div className={styles.menuItem}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
