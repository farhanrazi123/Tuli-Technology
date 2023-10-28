/* eslint-disable jsx-a11y/alt-text */
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Menu from './Menu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <header className="header" id="header">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center">
          <img src='/images/tulitechlogo.svg' alt='logo' style={{ width: "100px", height: "50px" }} />
          <div className="d-flex justify-content-end align-items-center gap-4">
            <div className="d-flex gap-3">
              <button className="btn btn-light btn-rounded">9887498839</button>
              <button className="btn btn-light btn-rounded service-link relative">
                <span className="d-flex align-items-center gap-2">
                  <span>Services</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                        fill="rgba(245,245,245,1)"
                      ></path>
                    </svg>
                  </span>
                </span>
              </button>
              <button className="btn btn-warning btn-rounded">Get in Touch</button>
            </div>
            <div>
              <button className="menu-btn" title="menu" type="button" onClick={openNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} closeNav={closeNav}/>
    </header>
  );
}

export default Header;
