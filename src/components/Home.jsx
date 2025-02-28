import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../images/home.jpg";

import Same from "./Same";

function Home() {
  return (
    <>
      <Same
        title="Welcome to our website"
        text="Take look of all our services and see what we can help you with."
        imgsrc={homeimg}
        btn="Read More"
      />
    </>
  );
}

export default Home;
