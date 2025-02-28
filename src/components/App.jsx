import React from "react";

import "../index.css";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

import Error from "./Error";
import List from "./List";
import Footer from "./Footer";

import { Route, Routes } from "react-router-dom";
//import * as auth from "../utils/auth";

function App() {
  return (
    <div className="App">
      <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
