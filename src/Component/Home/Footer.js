/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { linkNames } from "./constant";

function Footer() {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const links = linksContainerRef.current.querySelectorAll(".footer-txt");


    gsap.from(links, {
      opacity: -1,
      x: -50, // Animate from left to right
      y: -50,
      duration: 0.5,
    //   stagger: 0.2,
      onComplete: () => {
        gsap.to(links, {
          opacity: 1,
          x: 0, // Return to the original horizontal position
          y: 0, // Return to the original vertical position
          duration: 0.5,
          stagger: 0.2,
        });
      },
    });
  };

// const animateLinks = () => {
//     const links = linksContainerRef.current.querySelectorAll(".footer-txt");
//     const text1 = linksContainerRef.current.querySelector(".footer-txt1");
  
//     gsap.from(text1, {
//       opacity: -1, // Change to 0 to start from hidden
//       x: -50,
//       y: -50,
//       duration: 0.1,
//       stagger: 0.1,
//     });
  
//     gsap.from(links, {
//       opacity: -1,
//       x: -50,
//       y: -50,
//       duration: 0.1,
//       stagger: 0.1,
//       onComplete: () => {
//         gsap.to([text1, links], {
//           opacity: 1,
//           x: 0,
//           y: 0,
//           duration: 0.1,
//           stagger: 0.1,
//         });
//       },
//     });
//   };
  

  useEffect(() => {
    animateLinks();
  }, []);

  return (
    <section
      ref={linksContainerRef}
      className="p-4 text-white"
      style={{ backgroundColor: "#1b2338" }}
    >
      <div className="e-con-inner" style={{ padding: "96px 0 16px 0" }}>
        <div className="elementor-widget-container">
          <h2 className="footer-txt1">
            We don't hide behind the bushes
            <span className="text-warning ">.</span>
          </h2>
        </div>

        <div style={{ padding: "0 0 6rem" }}>
          <h6 className="">
            <a className="" style={{ fontSize: "inherit" }} href="">
              enquiries@webbuds.co.uk
            </a>
          </h6>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          {/* <div ref={linksContainerRef}> */}
          {linkNames.map((linkGroup, index) => (
            <div key={index}>
              {linkGroup.map((link, subIndex) => (
                <p key={subIndex} className="footer-txt">
                  {link}
                </p>
              ))}
            </div>
          ))}
          {/* </div> */}
        </div>

        <div className="elementor-widget-container p-4">
          <p className="footer-txt">
            © Web Buds Ltd 2022. All Rights Reserved.
            <br />
            Company Registration No: 11607956.
          </p>{" "}
        </div>
      </div>
    </section>
  );
}

export default Footer;
