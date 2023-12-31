import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import FAQ from "./pages/help/FAQ";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<HelpLayout/>}>
        <Route path="faq" element={<FAQ/>}/>
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);
function App2() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App2;
