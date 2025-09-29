import logo from "./logo.svg";
import "./App.css";


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  useEffect(() => {
    import("./components/Home.js").then((module) =>
      setHomePage(() => module.default)
    );
  }, []);

  const loadHomePage = () => {
    import("./components/Home.js").then((module) =>
      setHomePage(() => module.default)
    ).catch((err)=>{
      console(err)
    });
  };

  const loadContactPage = () => {
    import("./components/Contact.js").then((module) =>
      setContactPage(() => module.default)
    );
  };

  const loadAboutPage = () => {
    import("./components/About.js").then((module) =>
      setAboutPage(() => module.default)
    );
  };

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link onClick={loadHomePage} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={loadAboutPage} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={loadContactPage} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={HomePage? <HomePage /> : <h1>Loading..</h1>} />
          <Route
            path="/about"
            element={AboutPage ? <AboutPage /> : <h1>Loading..</h1>}
          />
          <Route
            path="/contact"
            element={ContactPage ? <ContactPage/> : <h1>Loading...</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
