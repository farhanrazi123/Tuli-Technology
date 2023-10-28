import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {  Grid, Typography } from "@mui/material";


function HeroBanner() {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const classNames = [
      "text-warning semi-bold",
      "heading",
      "text-warning",
      "text-white",
    ];

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
    <>
      <section
        ref={linksContainerRef}
        className="relative hero-banner does py-5 text-white"
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden", // Hide any overflow content
        }}
      >
        <Grid className="hero-banner-content p-4">
          <Grid className="col-12 col-lg-8 col-md-10">
            <Typography className="">Web Design London</Typography>
            <Typography className="heroText1">
              Our web designs are human-centric.
            </Typography>
            <Typography
              className="heroText2"
              style={{
                color: "#fff",
                fontFamily: "Hellix SemiBold",
                fontSize: "2.3rem",
                fontEeight: "600",
                lineHeight: "40px",
                marginBottom: "20px",
              }}
            >
              We design functional websites that improve your business growth
              and online visibility
            </Typography>
          </Grid>
        </Grid>
        <Grid className="elementor-background-video-container">
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
              width: "100%",
              height: "100%",
              animation: "scaleAnimation 5s infinite", // Apply the animation
            }}
          ></video>
        </Grid>
      </section>
    </>
  );
}

export default HeroBanner;
