/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { projectData } from "../Home/constant";

function RecentComplete() {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const classNames = [ "heading", "text-warning", "p-tag", "text1", "text2", "imgg"]; 

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
    <section ref={linksContainerRef} className="p-4" style={{margin: "60px 0"}}>
      <div>
        <div className="heading">
         What have we done <span className="text-warning">recently.</span>
        </div>
      </div>
      <div className="mb-5">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="my-custom-class"
            style={{ display: "flex" }}
          >
            <div className="imgg"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                flex: "0 0 calc(60%)",
                height: "375px",
              }}
            >
              {/* <div className="text"> */}
                <div>
                  <p className="text1">{project.description}</p>
                </div>
                <div>
                  <h4 className="text2">{project.title}</h4>
                </div>
              {/* </div> */}
            </div>

            <div className="imgg"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                flex: "0 0 calc(40%)",
                height: "375px",
              }}
            >
              <div className="text">
                <div>
                  <p className="text1">{project.description}</p>
                </div>
                <div>
                  <h4 className="text2">{project.title}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <a href="#" className="btn1">
          View all Projects
        </a>
        <a href="#" className="btn2">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default RecentComplete;
