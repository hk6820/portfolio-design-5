// ==========================================
// PORTFOLIO CONFIGURATION FILE
// ==========================================
// This file contains all the customizable content for your portfolio.
// Simply update the values below to personalize your portfolio.

// Import your assets here
import designbg from '../assets/designbg.png';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import photo10 from '../assets/photo10.jpg';
import photo11 from '../assets/photo19.jpg';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
// Icons will be defined in the Services component to avoid import issues

// ==========================================
// PERSONAL INFORMATION
// ==========================================
export const personalInfo = {
  // Your name (displayed in Hero section)
  name: "Alex Smith",
  
  // Your professional roles/titles (displayed under your name)
  roles: ["Photographer", "Speaker"],
  
  // Your professional description (displayed in Hero section)
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  
  // Call-to-action button text
  ctaText: "Contact Me",
  
  // Logo/Brand name (displayed in navigation)
  logo: "Credo"
};

// ==========================================
// NAVIGATION SETTINGS
// ==========================================
export const navigationConfig = {
  // Navigation menu items (these will be converted to #home, #about, etc.)
  navLinks: ["Home", "About", "Services", "Photography", "Blog", "Contact"],
  
  // Section IDs that correspond to navigation links
  // These must match the IDs used in your sections
  sectionIds: {
    "Home": "home",
    "About": "about", 
    "Services": "services",
    "Photography": "photography",
    "Blog": "blog",
    "Contact": "contact"
  }
};

// Validation function to ensure navigation consistency
export const validateNavigation = () => {
  const { navLinks, sectionIds } = navigationConfig;
  const missingIds = navLinks.filter(link => !sectionIds[link]);
  
  if (missingIds.length > 0) {
    console.warn('Navigation warning: Missing section IDs for:', missingIds);
    return false;
  }
  
  return true;
};

// ==========================================
// HERO SECTION
// ==========================================
export const heroConfig = {
  // Background image for hero section
  backgroundImage: designbg,
  
  // Background sizing options: 'cover', 'contain', 'fit', 'portrait'
  // 'cover' - Image covers entire area (may crop)
  // 'contain' - Image fits entirely (may show empty space)
  // 'fit' - Image stretches to fill area (may distort)
  // 'portrait' - Optimized for portrait images (shows full height, positioned right)
  backgroundSize: 'portrait', // Change this to 'cover', 'contain', 'fit', or 'portrait' as needed
  
  // All text content is pulled from personalInfo above
};

// ==========================================
// ABOUT SECTION
// ==========================================
export const aboutConfig = {
  // Your photo for the about section
  image: designbg,
  
  // Biography paragraphs (add as many as needed)
  bio: [
    "Short bio about the individual, their career, or experience. This is where you can tell your story and share what makes you unique in your field.",
    "Second paragraph of bio or personal background. Add more details about your journey, achievements, or what drives your passion."
  ],
  
  // Skills with progress percentages (0-100)
  skills: [
    { name: "Photography", value: 89 },
    { name: "Wedding Photography", value: 75 },
    { name: "Event Photography", value: 94 },
    { name: "Conference Speaking", value: 94 }
  ]
};

// ==========================================
// SERVICES SECTION
// ==========================================
export const servicesConfig = {
  heading: "My Services",
  services: [
    {
      icon: "FaCamera",
      title: "Photography",
      description: "Capturing life's best moments with precision and creativity. Professional photography for all occasions."
    },
    {
      icon: "FaMicrophone",
      title: "Speaking",
      description: "Engaging and inspiring talks for creative professionals. Sharing insights from years of experience."
    },
    {
      icon: "FaLaptopCode",
      title: "Web Development",
      description: "Building modern and responsive websites with great UX. Clean code and beautiful designs."
    },
    {
      icon: "FaPaintBrush",
      title: "Creative Consulting",
      description: "Helping businesses enhance their visual identity and creative strategy."
    }
  ]
};

// ==========================================
// PHOTOGRAPHY GALLERY
// ==========================================
export const photographyConfig = {
  title: "My Photography",
  
  // Gallery images (add or remove as needed)
  images: [
    { src: photo1, alt: 'Portrait Photography' },
    { src: photo2, alt: 'Abstract Water' },
    { src: photo3, alt: 'Nature Photography' },
    { src: photo4, alt: 'Portrait Session' },
    { src: photo5, alt: 'Artistic Photography' },
    { src: photo6, alt: 'Creative Composition' },
    { src: photo7, alt: 'Professional Portrait' },
    { src: photo8, alt: 'Abstract Art' },
    { src: photo9, alt: 'Creative Photography' },
    { src: photo10, alt: 'Professional Work' },
    { src: photo11, alt: 'Artistic Vision' },
    { src: photo1, alt: 'Additional Work' }
  ],
  
  // Testimonials section
  testimonialHeading: "What Clients Are Saying",
  testimonials: [
    {
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
      author: "Ryan Peters"
    },
    {
      message: "Exceptional service and stunning photography. Highly recommended! The attention to detail and creative vision exceeded all our expectations.",
      author: "Sophia Lee"
    },
    {
      message: "Professional, creative, and easy to work with. Will hire again! The entire experience was seamless from start to finish.",
      author: "Arjun Patel"
    }
  ]
};

// ==========================================
// BLOG SECTION
// ==========================================
export const blogConfig = {
  // Blog posts (add or remove as needed)
  posts: [
    {
      title: "Why Photography Is Good For Business",
      date: "April 25, 2019",
      description: "Exploring how professional photography can elevate your brand and attract more customers.",
      image: project1,
      link: "/blog/1"
    },
    {
      title: "The Art of Visual Storytelling",
      date: "March 15, 2019",
      description: "Learn how to tell compelling stories through your photography and connect with your audience.",
      image: project2,
      link: "/blog/2"
    },
    {
      title: "Building Your Creative Portfolio",
      date: "February 10, 2019",
      description: "Tips and strategies for creating a portfolio that stands out and showcases your best work.",
      image: project3,
      link: "/blog/3"
    },
    {
      title: "Photography Trends in 2024",
      date: "January 20, 2019",
      description: "Stay ahead of the curve with the latest photography trends and techniques for the new year.",
      image: project1,
      link: "/blog/4"
    },
    {
      title: "Client Communication Best Practices",
      date: "December 5, 2018",
      description: "How to effectively communicate with clients to ensure successful projects and lasting relationships.",
      image: project2,
      link: "/blog/5"
    }
  ]
};

// ==========================================
// CONTACT SECTION
// ==========================================
export const contactConfig = {
  heading: "Say Hello",
  
  // Form field labels (customize the placeholder text)
  fields: {
    firstName: "First name",
    lastName: "Last name", 
    email: "Email address",
    subject: "Subject of the message",
    message: "Type your message here.."
  },
  
  // Submit button text
  buttonLabel: "Send Message"
};

// ==========================================
// EMAIL CONFIGURATION
// ==========================================
// Update these with your EmailJS credentials
export const emailConfig = {
  serviceId: 'service_do1rvzl',    // Replace with your EmailJS Service ID
  templateId: 'template_5n8vv3i',  // Replace with your EmailJS Template ID  
  publicKey: 'q7pLnhXrbOWW2EHhu'   // Replace with your EmailJS Public Key
};

// ==========================================
// EXPORT ALL CONFIGURATIONS
// ==========================================
export default {
  personalInfo,
  navigationConfig,
  heroConfig,
  aboutConfig,
  servicesConfig,
  photographyConfig,
  blogConfig,
  contactConfig,
  emailConfig
};
