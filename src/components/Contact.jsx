import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="contract1">
        <h1>Contact us</h1>
        <form className="contact">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="name">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input type="text" placeholder="Enter your mobile" />
          </div>
          <div className="btnBox">
            <div className="btn">
              <NavLink to="/" className="readMore">
                Submit Details
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
