import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Certificate from "@/components/Certificate/Certificate";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Modal from "@/components/Modal/Modal";
import Portfoli from "@/components/Portfolio/Portfoli";
import Service from "@/components/Service/Service";
import { IMenu } from "@/models/reducers/menu.model";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { changeTheme } from "@/utils/theme";
import React, { useEffect, useState } from "react";
type Props = {};
const index = ({}: Props) => {
  const [scroll, setScroll] = useState(false);
  return (
    <div
      className="landingPage"
      id="themeBoundary"
      onScroll={(e: any) => {
        console.log(e);

        if (e.target.scrollTop > 80) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }}
    >
      <title>Van Hung T</title>
      <Modal />
      <Header scroll={scroll} />
      <Home />
      <About />
      <Service />
      <Portfoli />
      <Certificate />
      <Blog />
      <Contact />
      <button
        id="themeBtn"
        onClick={() => {
          changeTheme();
        }}
      >
        <img id="imgTheme" src="./images/darkIcon.png" alt="" />
      </button>
    </div>
  );
};

export default index;
