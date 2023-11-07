import Home from "@/components/Home/Home";
import Header from "@/components/header/Header";
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
      <div style={{ height: "100vh", width: "100vw" }}>B</div>
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
