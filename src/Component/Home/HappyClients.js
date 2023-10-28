import React, { useEffect, useRef } from "react";
import { imageInfo } from "./constant";
import gsap from "gsap";

const HappyClients = () => {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const links = linksContainerRef.current.querySelectorAll(".imgtxt");

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
  useEffect(() => {
    animateLinks();
  }, []);

  return (
    <>
      <section ref={linksContainerRef} className="p-4">
        <div className="">
          <div className="animated fadeInUp">
            <h2 className="hpy-text">
              Our happy <span className="text-warning">clients.</span>
            </h2>
          </div>
          <div
            className="animated fadeInUp"
            style={{ animationDelay: "200ms", padding: "0 0 3rem" }}
          >
            <h6 className="hpy-text1">
              We’re proud of the brands we’ve helped achieve success with, and
              here are just a few.
            </h6>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {imageInfo.map((image, index) => (
              <div key={index} className="imgtxt" style={{ animationDelay: "200ms" }}>
                <img style={{ padding: "10px" }} src={image.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="inner-paret" style={{marginBottom: "60px"}}>
        <div>
          <div className="">
            <h6 className="" style={{ color: "white" }}>
              Are you feeling it?
            </h6>
          </div>
          <div className="text11div">
            <h6 class="text11">
              Don't settle for a mediocre website.
              <br />
              Lets shake hands and start your website journey...
            </h6>
          </div>
          <div className="btn-grpdiv">
            <span className="btn-grp">Lets get the ball rolling</span>
          </div>
        </div>
        <div className="">
          <img
            decoding="async"
            width="525"
            height="73"
            src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/glasses-ico.svg"
            className="attachment-large size-large wp-image-374 entered lazyloaded"
            alt=""
            data-lazy-src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/glasses-ico.svg"
            data-ll-status="loaded"
          />
        </div>
      </div>
    </>
  );
};

export default HappyClients;
