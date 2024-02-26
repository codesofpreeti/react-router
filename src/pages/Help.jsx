import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <div className="flex justify-between font-bold ">
        <NavLink to="faq">Get all the help here? FAQs.</NavLink>
        <NavLink to="contact">More help? </NavLink>
      </div>
      <div className="m-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Help;
