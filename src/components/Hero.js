import React from "react";
import "./Hero.css";

const Hero = ({ name, roles, description, ctaText, backgroundImage, id, contactId, backgroundSize = 'cover' }) => {
  const heroStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
  };

  // Determine CSS class based on backgroundSize prop
  const getBackgroundClass = () => {
    switch (backgroundSize) {
      case 'contain':
        return 'hero contain-image';
      case 'fit':
        return 'hero fit-image';
      case 'portrait':
        return 'hero portrait-image';
      case 'cover':
      default:
        return 'hero cover-image';
    }
  };

  return (
    <section className={getBackgroundClass()} style={heroStyle} id={id||'home'}>
      <div className="hero-content">
        <h1>I'm {name}</h1>
        <p className="roles">{roles.join(" | ")}</p>
        <p className="description">{description}</p>
       <button className="cta-button" onClick={() => {
  document.getElementById(contactId || "contact")?.scrollIntoView({ behavior: "smooth" });
}}>
  {ctaText}
</button>

      </div>
    </section>
  );
};

export default Hero;
