import React from "react";
import {
  NavLink,
  Outlet
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex bg-green-600 p-4 justify-between">
        <h1 className="font-bold capitalize">jobSearch</h1>
        <div className="flex gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </div>
      </nav>
      <main className="shadow-lg p-4 border m-12">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
