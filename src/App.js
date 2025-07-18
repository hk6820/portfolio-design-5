// Importing necessary components and assets
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import designbg from './assets/designbg.png'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'
import photo5 from './assets/photo5.jpg'
import photo6 from './assets/photo6.jpg'
import photo7 from './assets/photo7.jpg'
import photo8 from './assets/photo8.jpg'
import photo9 from './assets/photo9.jpg'
import photo10 from './assets/photo10.jpg'
import photo11 from './assets/photo19.jpg'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import PhotoGallery from "./pages/Photography";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { FaBullhorn, FaLaptopCode } from "react-icons/fa";
import BlogSection from "./pages/Blog";

function App() {

  // ✅ Navigation Links - used to create nav items and link to different sections using hash (#)
  const navLinks = ["Home", "About", "Services", "Photography", "Blog", "Contact"];

  // ✅ Hero Section Data - passed to Hero component for dynamic name, roles, etc.
  const heroData = {
    name: "Craig Smith",
    roles: ["Photographer", "Speaker"], // Can add more roles here
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    ctaText: "Contact Me", // Button will scroll to Contact section
  };

  // ✅ About Section - includes image, bio paragraphs, and animated skill progress bars
  const aboutData = {
    image: designbg, // Image shown on the left side
    bio: [
      "Short bio about the individual, their career, or experience.",
      "Second paragraph of bio or personal background.",
    ],
    skills: [
      { name: "Photographer", value: 89 },
      { name: "Wedding", value: 75 },
      { name: "Events", value: 94 },
      { name: "Conferences", value: 94 },
    ],
  };

  // ✅ Photography Gallery - array of images used in the gallery and lightbox
  const photos = [
    { src: photo1, alt: 'Portrait' },
    { src: photo2, alt: 'Abstract Water' },
    { src: photo3, alt: 'Abstract Water' },
    { src: photo4, alt: 'Portrait' },
    { src: photo5, alt: 'Abstract Water' },
    { src: photo6, alt: 'Abstract Water' },
    { src: photo7, alt: 'Portrait' },
    { src: photo8, alt: 'Abstract Water' },
    { src: photo9, alt: 'Abstract Water' },
    { src: photo10, alt: 'Abstract Water' },
    { src: photo11, alt: 'Abstract Water' },
    { src: photo1, alt: 'Portrait' },
  ];

  // ✅ Testimonials - shown below photography gallery using slider
  const testimonials = [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      author: "Ryan Peters",
    },
    {
      message:
        "Exceptional service and stunning photography. Highly recommended!",
      author: "Sophia Lee",
    },
    {
      message:
        "Professional, creative, and easy to work with. Will hire again!",
      author: "Arjun Patel",
    },
  ];

  // ✅ Services Offered - each service is shown as a card (with optional flipping on mobile)
  const serviceData = [
    {
      icon: <FaBullhorn />,
      title: "Photography",
      description: "Capturing life’s best moments with precision and creativity.",
    },
    {
      icon: <FaBullhorn />,
      title: "Speaking",
      description: "Engaging and inspiring talks for creative professionals.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Building modern and responsive websites with great UX.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Duplicate for testing multiple cards",
    },
  ];

  // ✅ Blog Posts - each object represents a blog preview with a title, date, image and short desc
  const blogPosts = [
    {
      title: "Why Photography Is Good For Business",
      date: "April 25, 2019",
      description: "Short description shown on the blog card.",
      image: project1,
      link: "/blog/1",
    },
    {
      title: "Why Photography Is Good For Business",
      date: "April 25, 2019",
      description: "Short description shown on the blog card.",
      image: project2,
      link: "/blog/2",
    },
    {
      title: "Why Photography Is Good For Business",
      date: "April 25, 2019",
      description: "Short description shown on the blog card.",
      image: project3,
      link: "/blog/3",
    },
    {
      title: "Why Photography Is Good For Business",
      date: "April 25, 2019",
      description: "Short description shown on the blog card.",
      image: project1,
      link: "/blog/2",
    },
    {
      title: "Why Photography Is Good For Business",
      date: "April 25, 2019",
      description: "Short description shown on the blog card.",
      image: project2,
      link: "/blog/3",
    },
  ];

  // ✅ Main JSX layout: All sections are rendered in order using corresponding props
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar logo="Credo" links={navLinks} />

      <Hero
        id='home'
        {...heroData}
        backgroundImage={designbg}
      />

      <About {...aboutData} id='about' />

      <Services heading="My Services" services={serviceData} id='services' />

      <PhotoGallery
        title="My Photography"
        images={photos}
        testimonials={testimonials}
        id='photography'
        testimonialHeading="What Client Are Saying"
      />

      <BlogSection posts={blogPosts} id='blog' />

      <Contact
        id='contact'
        heading="Say Hello"
        fields={{
          firstName: "First name",
          lastName: "Last name",
          email: "Email address",
          subject: "Subject of the message",
          message: "Type your message here..",
        }}
        buttonLabel="Send Message"
      />
    </div>
  );
}

export default App;
