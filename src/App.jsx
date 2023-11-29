import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
     
      <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouters</h1>
          <Link to="/"><button>Home</button></Link>
          <br />
          <NavLink to="/about"><button>About</button></NavLink>
        </nav>
      </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
