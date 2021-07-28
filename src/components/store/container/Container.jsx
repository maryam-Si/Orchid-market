import React from "react";
import Header from "../header/Header";
function Container({ children }) {
  return (
    <>
      <Header />
      <main>{children && children}</main>
    </>
  );
}

export default Container;
