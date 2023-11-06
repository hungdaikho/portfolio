import Header from "@/components/header/Header";
import { changeTheme } from "@/utils/theme";
import React from "react";
type Props = {};
const index = ({}: Props) => {
  return (
    <div className="landingPage" id="themeBoundary">
      <Header />
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
