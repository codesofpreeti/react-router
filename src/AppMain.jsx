import "./index.css";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Help from "./pages/Help";
import Contact from "./pages/help/Contact"
import FaQ from "./pages/help/FAQ"
import NotFound from "./pages/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help/>}>
        <Route path="faq" element={<FaQ/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

const AppMain = () => {
  return <RouterProvider router={router} />;
};

export default AppMain;
