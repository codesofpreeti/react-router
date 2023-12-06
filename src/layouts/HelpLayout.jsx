import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="items-center">
      <h1 className="bg-green-500 p-4 rounded-md">Website help</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        molestiae!
      </p>
      <nav className="flex gap-9 items-center justify-center">
        <NavLink
          className="border-solid border-2 border-indigo-600 hover:bg-indigo-200 rounded-md"
          to="faq"
        >
          View the FAQ
        </NavLink>
        <br />
        <NavLink
          className="border-solid border-2 border-indigo-600 hover:bg-indigo-200 rounded-md"
          to="contact"
        >
          Contact us
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
