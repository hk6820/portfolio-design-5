import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = ({ image, bio, skills, id }) => {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedValues(skills.map((s) => s.value));
    }, 300);
    return () => clearTimeout(timeout);
  }, [skills]);

  return (
    <section className="about-section" id={id || "about"}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={image} alt="about" />
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill"
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <span>{skill.name}</span>
              <div className="progress-bar">
                <motion.div
                  className="filled"
                  style={{ width: `${animatedValues[index]}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedValues[index]}%` }}
                  transition={{ duration: 1.2 }}
                >
                  <span className="label">{skill.value}%</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="about-bio"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
