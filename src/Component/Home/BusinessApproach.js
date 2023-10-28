/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { serviceData } from "./constant";

function BusinessApproach() {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const classNames = ["text7", "text8", "text5", "text6", "async"];

    classNames.forEach((className) => {
      const links = linksContainerRef.current.querySelectorAll(`.${className}`);

      gsap.to(links, {
        opacity: 0, // Change opacity to 0 to fade out
        y: 50,
        duration: 0.5,
        onComplete: () => {
          gsap.to(links, {
            opacity: 1, // Change opacity to 1 to fade in
            x: 0,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
          });
        }
      });
    });
  };

  useEffect(() => {
    animateLinks();
  }, []);

  return (
    <section className="p-4" ref={linksContainerRef}>
      <div>
        <h6 className="text7">
          We work with all types of businesses, no matter the size. Whether
          you're a small startup or a large corporation, we believe that we can
          be the right fit for you
        </h6>
        <div>
          <h6 className="text8">
            Our approach is highly personalized and tailored, ensuring that each
            client receives the support and services they need to succeed. We
            believe that no business is too small or too big for us, and we are
            committed to delivering exceptional results for all of our clients.
            Whether you're looking to establish a strong online presence, reach
            your target audience, or drive business growth, we are here to help.
          </h6>
        </div>
      </div>
      <div className="cntr">
        {serviceData.map((service, index) => (
          <div className="cntrbox" key={index}>
            <img
              className="async"
              decoding="async"
              width="80"
              height="80"
              src={service.image}
            />
            <h6 className="text5">{service.title}</h6>
            <h6 className="text6">{service.description}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BusinessApproach;
