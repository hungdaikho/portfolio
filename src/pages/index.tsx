import CanvasAction from "@/components/CanvasAction/CanvasAction";
import Header from "@/components/Header/Header";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="landingPage">
      <title>Tran Van Hung</title>
      <div className="container">
        <CanvasAction />
        <Header />
      </div>
    </div>
  );
};

export default index;
