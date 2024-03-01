import React from "react";
import { useLocation, Link } from "react-router-dom";

const BreadCrumbs = () => {
  let currentLink = "";
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumbs" key={crumb}>
          <Link to={currentLink}>{crumb}<span> |</span></Link>
        </div>
      );
    });
  return (
    <div className="">
      <div className=" flex justify-start  gap-3 p-4">
        {crumbs}
      </div>
    </div>
  );
};

export default BreadCrumbs;
