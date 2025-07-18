import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Photography.css";
import Lightbox from "./Lightbox";
import TestimonialSlider from "../components/TestimonialSlider";

const PhotoGallery = ({ title, images, id, testimonials, testimonialHeading }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  return (
    <>
      <section className="gallery-section" id={id || "photography"}>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div
              className="gallery-item"
              key={index}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={img.src} alt={img.alt || `photo-${index}`} />
              <div className="overlay">
                <motion.span
                  className="search-icon"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  🔍
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={selectedIndex}
            setCurrentIndex={setSelectedIndex}
            onClose={closeLightbox}
          />
        )}
      </section>

      <TestimonialSlider testimonials={testimonials} testimonialHeading={testimonialHeading} />
    </>
  );
};

export default PhotoGallery;
