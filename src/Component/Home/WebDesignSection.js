import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imageUrls } from "./constant";

gsap.registerPlugin(ScrollTrigger);

function WebDesignSection() {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const links = linksContainerRef.current.querySelectorAll(".imgg");

    gsap.to(links, {
      opacity: -1,
      x: -50,
      y: -50,
      duration: 0.5,
      // stagger: 0.2,
      // scrollTrigger: {
      //   trigger: linksContainerRef.current,
      //   start: "top 80%", // Adjust the start point as needed
      //   end: "bottom 20%", // Adjust the end point as needed
      //   scrub: 1, // Set scrub to 1 for smooth animations
      // },
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

  useEffect(() => {
    animateLinks();
  }, []);

  return (
    <div
      ref={linksContainerRef}
      className="section "
      style={{
        backgroundImage: `url('https://www.webbuds.co.uk/wp-content/uploads/2023/05/2023-bckg.svg')`,
        backgroundSize: "cover",
        margin: "60px 0",
        padding: "60px 0"
      }}
    >
      <div className="p-4">
        <div>
          <div>
            <h2 className="text9">
              Web design is an art. At our Web Design Agency London{" "}
              <span className="text-warning">we are the artists.</span>
            </h2>
          </div>
          <div>
            <h6 className="text10">
              We use the power of technology and make bespoke websites on all
              major CMS and frameworks.
            </h6>
          </div>
          <div className="image-container">
            {imageUrls.map((url, index) => (
              <div key={index}>
                <img
                className="imgg"
                  decoding="async"
                  width="300"
                  height="112"
                  src={url}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="p-4">
        <div>
          <div>
            <h2 className="text9">
              Web design is an art. At our Web Design Agency London{" "}
              <span className="text-warning">we are the artists.</span>
            </h2>
          </div>
          <div>
            <h6 className="text10">
              We use the power of technology and make bespoke websites on all
              major CMS and frameworks.
            </h6>
          </div>
          <div className="image-container">
            {imageUrls.map((url, index) => (
              <div key={index}>
                <img
                  decoding="async"
                  width="300"
                  height="112"
                  src={url}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default WebDesignSection;
