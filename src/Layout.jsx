import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="p-4 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
