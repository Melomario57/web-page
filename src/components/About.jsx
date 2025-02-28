import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/img1.jpg";
import Same from "./Same";

function About() {
  return (
    <>
      <Same
        title="Know More about us"
        text="We are a startup company that is dedicated to providing the best tech services to our customers. We have a team of professionals who are always ready to help you."
        imgsrc={img1}
        btn="Know more"
      />
    </>
  );
}

export default About;
