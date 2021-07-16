import React from "react";
import NavBar from "../../../components/admin/navbar/NavBar";

function AdminPanel({ children }) {
  return (
    <div>
      <NavBar />
      <main style={{ marginTop: "5%" }}>{children && children}</main>
    </div>
  );
}

export default AdminPanel;
