import React from 'react';
import { testimonialsData } from './constant';

function TestimonialsSection() {
  return (
    <section className="p-4 " >
    <div className="elementor-element elementor-element-b6847ff e-con-full e-flex e-con e-child container" style={{maxWidth: "750px"}}>
          <div className="elementor-swiper swiper">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide" animation="slide-out-right">
                <div className="elementor-testimonial elementor-repeater-item-6399c97 card text-white" style={{padding: "64px 32px", backgroundColor: "#1b2338"}}>
                  <div className="elementor-testimonial__header">
                    <div className="elementor-testimonial__image">
                      <img
                        width="106"
                        height="73"
                        decoding="async"
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="" // Apply Bootstrap card-img-top class
                      />
                    </div>
                    <cite className="elementor-testimonial__cite">
                    <span className="elementor-testimonial__name card-title text-warning">{testimonial.name}</span>
                    </cite>
                  </div>
                  <div className="elementor-testimonial__content card-body">
                    <div className="elementor-testimonial__text card-text" style={{
                        fontFamily: "Hellix Medium",
                        fontSize: "19px",
                        fontWeight: "400",
                        lineHeight: "30px",
                    }}>{testimonial.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
