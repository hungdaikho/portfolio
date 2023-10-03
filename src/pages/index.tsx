import CanvasAction from "@/components/CanvasAction/CanvasAction";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import WelCome from "@/components/WelCome/WelCome";
import { Button } from "antd";
import React from "react";

type Props = {};

const index = ({}: Props) => {
  return (
    <div className="landingPage">
      <title>Tran Van Hung</title>
      <div className="network">
        <img src="/images/line.png" alt="" />
        <Button
          className="btn"
          icon={<img src="/images/github.png" alt="" />}
        />
        <Button
          className="btn"
          icon={<img src="/images/network.png" alt="" />}
        />
      </div>
      <div className="container">
        <CanvasAction />
        <Header />
        <WelCome />
        <Main />
      </div>
    </div>
  );
};

export default index;
