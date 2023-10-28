/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Menu({ closeNav }) {
  const handleServicesClick = () => {
    // document.getElementById("muServ").style.width = "100%";
  };

  return (
    <>
      <div id="myNav" className="overlay">
        <a href="" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <div id="myService">
            <a href="#" onClick={handleServicesClick}>
              Services
            </a>
            <a href="#">About</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div id="muServ" className="overlay">
        <a href="" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <div id="myService">
            <a href="#">Creative Web Design</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Design & Branding</a>
            <a href="#">UI & UX Design</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
