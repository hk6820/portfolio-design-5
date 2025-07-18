import React from "react";
import "./Hero.css";

const Hero = ({ name, roles, description, ctaText, backgroundImage,id }) => {
  const heroStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
  };

  return (
    <section className="hero" style={heroStyle} id={id||'home'}>
      <div className="hero-content">
        <h1>I'm {name}</h1>
        <p className="roles">{roles.join(" | ")}</p>
        <p className="description">{description}</p>
       <button className="cta-button" onClick={() => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}}>
  {ctaText}
</button>

      </div>
    </section>
  );
};

export default Hero;
