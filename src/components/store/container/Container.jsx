import React from "react";
import Header from "../header/Header";
function Container({ children }) {
  return (
    <>
      <Header />
      {children && children}
    </>
  );
}

export default Container;
