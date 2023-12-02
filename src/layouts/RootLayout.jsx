import { NavLink, Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav className="flex gap-5 p-4">
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <br />
          <NavLink to="/about">
            <button>About</button>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
