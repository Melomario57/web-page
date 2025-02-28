import React from "react";

import Card from "./Card";
import apiData from "../utils/apiData";
function Services() {
  return (
    <>
      <h1>Our Services</h1>
      <div className="services">
        {apiData.map((values) => {
          return (
            <Card
              title1={values.stitle}
              imgSource={values.imgsrc}
              desc1={values.desc1}
              btnService={values.btnService}
            />
          );
        })}
      </div>
    </>
  );
}

export default Services;
