/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const elements = useRef([]);

  const animateElement = (element, animation) => {
    gsap.to(element, {
      ...animation,
    });
  };

  const createTrigger = (triggerElement, animation) => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top center", // Adjust as needed
      end: "center center", // Adjust as needed
      onToggle: self => {
        if (self.isActive) {
          animateElement(triggerElement, animation);
        }
      },
    });
  };

  const addElement = (element, animation) => {
    elements.current.push(element);
    createTrigger(element, animation);
  };

  useEffect(() => {
    elements.current.forEach((element, index) => {
      createTrigger(element, animations[index]);
    });
  }, []);

  return addElement;
}
