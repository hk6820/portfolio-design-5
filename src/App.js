import React from "react";
// Importing necessary components and assets
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import PhotoGallery from "./pages/Photography";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import BlogSection from "./pages/Blog";

// Import configuration
import {
  personalInfo,
  navigationConfig,
  heroConfig,
  aboutConfig,
  servicesConfig,
  photographyConfig,
  blogConfig,
  contactConfig,
  validateNavigation
} from './config/portfolioConfig';

function App() {
  // All configuration is now imported from portfolioConfig.js
  // Users can easily customize their portfolio by editing that file
  
  // Validate navigation configuration
  React.useEffect(() => {
    validateNavigation();
  }, []);

  // ✅ Main JSX layout: All sections are rendered using configuration data
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar logo={personalInfo.logo} links={navigationConfig.navLinks} sectionIds={navigationConfig.sectionIds} />

      <Hero
        id={navigationConfig.sectionIds["Home"]}
        name={personalInfo.name}
        roles={personalInfo.roles}
        description={personalInfo.description}
        ctaText={personalInfo.ctaText}
        backgroundImage={heroConfig.backgroundImage}
        backgroundSize={heroConfig.backgroundSize}
        contactId={navigationConfig.sectionIds["Contact"]}
      />

      <About {...aboutConfig} id={navigationConfig.sectionIds["About"]} />

      <Services 
        heading={servicesConfig.heading} 
        services={servicesConfig.services} 
        id={navigationConfig.sectionIds["Services"]} 
      />

      <PhotoGallery
        title={photographyConfig.title}
        images={photographyConfig.images}
        testimonials={photographyConfig.testimonials}
        id={navigationConfig.sectionIds["Photography"]}
        testimonialHeading={photographyConfig.testimonialHeading}
      />

      <BlogSection posts={blogConfig.posts} id={navigationConfig.sectionIds["Blog"]} />

      <Contact
        id={navigationConfig.sectionIds["Contact"]}
        heading={contactConfig.heading}
        fields={contactConfig.fields}
        buttonLabel={contactConfig.buttonLabel}
      />
    </div>
  );
}

export default App;
