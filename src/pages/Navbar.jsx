import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";

const Navbar = () => {
  return (
    <div>
      <header>
      <nav className="flex bg-green-600 p-4 justify-between">
        <NavLink className="font-bold capitalize" to="/">
          RandomUsers
        </NavLink>
        <div className="flex gap-3">
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </div>
      </nav>
      <BreadCrumbs/>
      </header>

      <main className="shadow-lg p-4 border m-12">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
