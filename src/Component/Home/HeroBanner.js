import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import './HeroBanner.css'; // Import your CSS file with animation classes

function HeroBanner() {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const classNames = [ "text-warning semi-bold", "heading", "text-warning", "text-white"]; 

    classNames.forEach((className) => {
      const links = linksContainerRef.current.querySelectorAll(`.${className}`);

      gsap.to(links, {
        opacity: -1,
        // x: -50,
        y: 50,
        duration: 0.5,
        onComplete: () => {
          gsap.to(links, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
          });
        },
      });
    });
  };

  useEffect(() => {
    animateLinks();
  }, []);
  return (
    <section
    ref={linksContainerRef}
      className="relative hero-banner does py-5 text-white"
      style={{
        height: "100vh",
        position: "relative", // Set the section to a relative position
        overflow: "hidden", // Hide any overflow content
      }}
    >
      <div className="hero-banner-content p-4">
        <div className="col-12 col-lg-8 col-md-10">
          <div className="text-warning semi-bold">
            Software & Web Solution Agency London
          </div>
          <h1 className="heading text-white m-0">
            Revamp Your Brand<br />
            <span className="text-warning">With Our Creative Mastery.</span>
          </h1>
          <p className="text-white medium">
            Delve into the versatile range of services we offer. We develop and design, and make you shine like never before!
            Put your finger on the type of service you need, and we are available for you.
          </p>
        </div>
      </div>
      <div className="elementor-background-video-container">
        <video
          className="elementor-background-video-hosted elementor-html5-video"
          autoPlay
          muted
          playsInline
          loop
          src="/images/bckgrndvideo.mp4"
          style={{
            // position: "absolute", // Set the video to an absolute position
            top: 0,
            left: 0,
            width: "100%", // Make the video cover the entire width
            height: "100%", // Make the video cover the entire height
            animation: "scaleAnimation 5s infinite", // Apply the animation
          }}
        ></video>
      </div>
    </section>
  );
}

export default HeroBanner;
