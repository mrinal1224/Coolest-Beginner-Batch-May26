import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy,Suspense } from "react";


const HomePage = lazy(()=>import('./components/Home.js'))
const AboutPage = lazy(()=>import('./components/About.js'))
const ContactPage = lazy(()=>import('./components/Contact.js'))




function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link  to="/">
                Home
              </Link>
            </li>
            <li>
              <Link  to="/about">
                About
              </Link>
            </li>
            <li>
              <Link  to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
       <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
