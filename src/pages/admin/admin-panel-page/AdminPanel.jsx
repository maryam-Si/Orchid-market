import React from "react";
import NavBar from "./navbar/NavBar";

function AdminPanel({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children && children}</main>
    </div>
  );
}

export default AdminPanel;
