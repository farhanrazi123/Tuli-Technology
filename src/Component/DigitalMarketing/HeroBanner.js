import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button, Grid, Typography } from "@mui/material";
// import './HeroBanner.css'; // Import your CSS file with animation classes
import "./style.css";

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
            <Grid style={{ display: "flex" }} gap={2}>
              <Button className="banerBtn">Website Types</Button>
              <Button className="banerBtn">Portfolio</Button>
              <Button className="banerBtn">Features</Button>
              <Button className="banerBtn">Process</Button>
              <Button className="banerBtn">Why us ?</Button>
              <Button className="banerBtn">Ebquire</Button>
            </Grid>
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
      <section className="p-4" >
        <Grid className="" style={{padding: "68px 0"}}>
         <Typography className="titleText" maxWidth={'1000px'}>
         Our design approach is rooted in extensive research, user testing, and data analysis to understand your audience and their needs <span className="text-warning">.</span>
         </Typography>
         
          <Typography className="" style={{
            maxWidth: "945px",
            color: "#2d2d2d",
            fontFamily: "Hellix Medium Sans-serif",
            fontSize: "1.6rem",
            fontWeight: "400",
            lineHeight: "2.3rem",
            marginBottom: "1.5rem",
          }}>
            We believe that exceptional design is more than just aesthetics – it's about seamlessly blending form and function to create intuitive and delightful user journeys. Our team of skilled designers and developers are passionate about pushing boundaries and staying at the forefront of industry trends to deliver results that exceed expectations.
          </Typography>

          <Typography className="" style={{
            maxWidth: "914px",
            color: "#2d2d2d",
            fontFamily: "Hellix Medium Sans-serif",
            fontSize: "1.6rem",
            fontWeight: "400",
            lineHeight: "2.3rem",
            marginBottom: "1.5rem",
          }}>
           From intuitive navigation to pixel-perfect elements, we pay attention to every detail to create immersive experiences that resonate with your target audience.
          </Typography>

          <Button className="banerBtn" style={{color: "#2d2d2d"}}>Get in Touch</Button>
        </Grid>
      </section>
    </>
  );
}

export default HeroBanner;
