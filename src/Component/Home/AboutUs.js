import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function AboutUs() {
  const linksContainerRef = useRef(null);

  const animateLinks = () => {
    const classNames = [ "heading", "text-warning", "heading", "text-warning", "wow zoomIn", "col-12", "p-tag"]; 

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
      <section ref={linksContainerRef} className="py-5 container" >
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center py-md-5">
          <div className="heading">
            Know <span className="text-warning">About us</span>
          </div>
          <p className="wow zoomIn">
            Established with only one motto to fulfill, our company is dedicated
            to empowering brand image through our expert services in website
            development and design tools, ensuring your business leaves a
            lasting impact.
            <br />
            We offer a comprehensive range of UI/UX design services tailored to
            create exceptional websites. We specialize in designing visually
            stunning websites that captivate and engage your audience. Our
            expertise extends to implementing custom website designing and
            responsive website designing too.
            <br />
            You can also get your online store a makeover using our e-commerce
            development expertise like Shopify, Laravel, Codeigniter, or
            OpenCart.
          </p>
        </div>
      </section>
      <section ref={linksContainerRef} className="does py-5 text-white" style={{backgroundColor: "#161c2d"}}>
        <div className="p-4">
          <div className="heading">
            What <span className="text-warning">we do</span>
          </div>
          <p className="col-12 col-md-8 col-lg-6 mb-5">
            Delve into the versatile range of services we offer. We develop and
            design, and make you shine like never before! Put your finger on the
            type of service you need and we are available for you.
          </p>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col service-card py-4 wow slideInUp">
              <div className="svg">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="110"
                  height="110"
                >
                  <path
                    d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
                <div className="heading">
                  Creative <span className="text-warning">web design</span>
                </div>
                <p className="p-tag">
                  Our creative web design services are designed to help
                  businesses establish a strong online presence, engage with
                  their audience, and achieve their business goals. Our team has
                  a passion for crafting beautiful and functional websites. Our
                  websites are fast, mobile-responsive, easily accessible,
                  visually appealing, user-friendly, and optimized for various
                  devices and screen sizes.
                </p>
              </div>
            </div>
            <div className="col service-card py-4 wow slideInUp">
              <div>
                <svg className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="120"
                  height="120"
                >
                  <path
                    d="M20 14.5V23.5L16.667 21H14V17H16.667L20 14.5ZM21 3C21.5523 3 22 3.44772 22 4V13H20V7.237L12.0718 14.338L4 7.215V19H12V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM21 17C22.1046 17 23 17.8954 23 19C23 20.0544 22.1841 20.9182 21.1493 20.9945L21 21V17ZM19.5 5H4.511L12.061 11.662L19.5 5Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
                <div className="heading">
                  Digital <span className="text-warning">marketing</span>
                </div>
                <p className="p-tag">
                  Whether you are looking to generate leads, increase sales, or
                  build brand awareness, our team is dedicated to helping you
                  succeed in the digital landscape. Our marketing campaigns are
                  data-driven, focused on delivering measurable results and
                  return on investment. We use advanced analytics and tracking
                  tools to monitor and optimize our campaigns, ensuring that
                  they are effective and efficient.
                </p>
              </div>
            </div>
            <div className="col service-card py-4 wow slideInUp">
              <div>
                <svg className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="110"
                  height="110"
                >
                  <path
                    d="M7.05033 14.1214L4.929 16.2427L7.75743 19.0711L19.0711 7.75743L16.2427 4.929L14.1214 7.05033L15.5356 8.46454L14.1214 9.87875L12.7072 8.46454L11.293 9.87875L12.7072 11.293L11.293 12.7072L9.87875 11.293L8.46454 12.7072L9.87875 14.1214L8.46454 15.5356L7.05033 14.1214ZM16.9498 2.80768L21.1925 7.05033C21.583 7.44085 21.583 8.07401 21.1925 8.46454L8.46454 21.1925C8.07401 21.583 7.44085 21.583 7.05033 21.1925L2.80768 16.9498C2.41716 16.5593 2.41716 15.9261 2.80768 15.5356L15.5356 2.80768C15.9261 2.41716 16.5593 2.41716 16.9498 2.80768ZM14.1214 18.3635L15.5356 16.9493L17.7781 19.1918H19.1923V17.7776L16.9498 15.5351L18.364 14.1209L20.9997 16.7566V20.9999H16.7578L14.1214 18.3635ZM5.63597 9.87812L2.80754 7.04969C2.41702 6.65917 2.41702 6.02601 2.80754 5.63548L5.63597 2.80705C6.02649 2.41653 6.65966 2.41653 7.05018 2.80705L9.87861 5.63548L8.4644 7.04969L6.34308 4.92837L4.92886 6.34259L7.05018 8.46391L5.63597 9.87812Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
                <div className="heading">
                  UI & <span className="text-warning">UX Design</span>
                </div>
                <p className="p-tag">
                  Whether you are looking to generate leads, increase sales, or
                  build brand awareness, our team is dedicated to helping you
                  succeed in the digital landscape. Our marketing campaigns are
                  data-driven, focused on delivering measurable results and
                  return on investment. We use advanced analytics and tracking
                  tools to monitor and optimize our campaigns, ensuring that
                  they are effective and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
