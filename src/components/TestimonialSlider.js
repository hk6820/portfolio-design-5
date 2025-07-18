import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./TestimonialSlider.css";

const TestimonialSlider = ({ testimonials, testimonialHeading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    appendDots: dots => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className="dot" />,
  };

  return (
    <motion.section
      className="testimonial-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {testimonialHeading || "What Client Are Saying"}
      </motion.h2>

      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <motion.div
            className="testimonial"
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="quote">“</span>
            <p className="message">{item.message}</p>
            <p className="author">— {item.author}</p>
          </motion.div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default TestimonialSlider;
