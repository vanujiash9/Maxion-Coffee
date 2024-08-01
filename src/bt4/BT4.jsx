import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../bt4/components/header";

function BT4() {
  return (
    <div id="page">
      <Header />
      <Outlet />
    </div>
  );
}

export default BT4;
