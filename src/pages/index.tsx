import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import { changeTheme } from "@/utils/theme";
import React, { useState } from "react";
type Props = {};
const index = ({}: Props) => {
  const [scroll, setScroll] = useState(false);
  return (
    <div
      className="landingPage"
      id="themeBoundary"
      onScroll={(e: any) => {
        if (e.target.scrollTop > 80) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }}
    >
      <Header scroll={scroll} />
      <Home />
      <About />
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
