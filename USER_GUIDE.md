# Portfolio Website User Guide

## 🎯 Overview

This is a modern, responsive portfolio website built with React. It's designed to be easily customizable so you can quickly personalize it with your own content and deploy it for your professional use.

## 📁 Project Structure

```
portfolio-design-6/
├── src/
│   ├── config/
│   │   └── portfolioConfig.js    # 🔧 Main configuration file
│   ├── components/               # Reusable components
│   ├── pages/                   # Page sections
│   ├── assets/                  # Images and media files
│   └── App.js                   # Main application file
├── public/                      # Static assets
├── package.json                 # Project dependencies
└── USER_GUIDE.md               # This guide
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Customize Your Portfolio
Open `src/config/portfolioConfig.js` and update your information.

### 4. Build for Production
```bash
npm run build
```

## ⚙️ Customization Guide

### 📝 Personal Information

Open `src/config/portfolioConfig.js` and update the `personalInfo` section:

```javascript
export const personalInfo = {
  name: "Your Name",                    // Your full name
  roles: ["Your Role", "Another Role"], // Your professional titles
  description: "Your description...",   // Hero section description
  ctaText: "Contact Me",               // Call-to-action button text
  logo: "Your Brand"                   // Navigation logo/brand name
};
```

### 🏠 About Section

Update the `aboutConfig` section:

```javascript
export const aboutConfig = {
  image: yourPhoto,                    // Replace with your photo
  bio: [
    "First paragraph about you...",    // Your biography
    "Second paragraph..."              // Add more paragraphs as needed
  ],
  skills: [
    { name: "Skill Name", value: 85 }, // Skill with percentage (0-100)
    { name: "Another Skill", value: 92 }
  ]
};
```

### 💼 Services Section

Customize your services in `servicesConfig`:

```javascript
export const servicesConfig = {
  heading: "My Services",
  services: [
    {
      icon: <FaIcon />,                // React icon component
      title: "Service Name",          // Service title
      description: "Service description..." // What you offer
    }
    // Add more services as needed
  ]
};
```

### 📸 Photography Gallery

Update your portfolio images in `photographyConfig`:

```javascript
export const photographyConfig = {
  title: "My Work",
  images: [
    { src: image1, alt: 'Description' }, // Your portfolio images
    { src: image2, alt: 'Description' }
  ],
  testimonials: [
    {
      message: "Client testimonial...",  // What clients say
      author: "Client Name"
    }
  ]
};
```

### 📱 Contact Form

Configure contact settings in `contactConfig`:

```javascript
export const contactConfig = {
  heading: "Get In Touch",
  fields: {
    firstName: "First name",           // Form field labels
    lastName: "Last name",
    email: "Email address",
    subject: "Subject",
    message: "Your message..."
  },
  buttonLabel: "Send Message"
};
```

## 📧 Email Setup (EmailJS)

To receive emails from your contact form:

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Create a free account

### 2. Set up Email Service
- Add an email service (Gmail, Outlook, etc.)
- Note your Service ID

### 3. Create Email Template
- Create a new email template
- Use these variables in your template:
  ```
  {{from_name}} - Sender's name
  {{from_email}} - Sender's email  
  {{subject}} - Message subject
  {{message}} - Message content
  ```
- Note your Template ID

### 4. Get Public Key
- Go to Account settings
- Copy your Public Key

### 5. Update Configuration
Update `emailConfig` in `portfolioConfig.js`:

```javascript
export const emailConfig = {
  serviceId: 'your_service_id',      // Your EmailJS Service ID
  templateId: 'your_template_id',    // Your EmailJS Template ID  
  publicKey: 'your_public_key'       // Your EmailJS Public Key
};
```

## 🖼️ Adding Your Images

> **📸 For detailed image optimization guide, see [IMAGE_UPLOAD_GUIDE.md](./IMAGE_UPLOAD_GUIDE.md)**

### Quick Image Setup

### 1. Replace Default Images
- Add your images to `src/assets/` folder
- **Recommended formats**: JPG, PNG, WebP
- **Max file size**: 2MB per image

### 2. Image Size Recommendations
- **Hero Background**: 1920x1080px (16:9 ratio)
- **About Photo**: 800x1000px (4:5 ratio) 
- **Portfolio Gallery**: 1200x800px (3:2 ratio)
- **Blog Images**: 800x600px (4:3 ratio)

### 3. Update Image Imports
In `portfolioConfig.js`, import your new images:

```javascript
import yourPhoto from '../assets/your-photo.jpg';
import portfolioImage1 from '../assets/portfolio-1.jpg';
// Add more imports as needed
```

### 4. Update Image References
Replace the default image references with your imports:

```javascript
export const aboutConfig = {
  image: yourPhoto,  // Use your imported image
  // ...
};
```

### 5. Image Optimization Tips
- Use online tools like TinyPNG to compress images
- Maintain consistent aspect ratios
- Test images on different screen sizes
- Add descriptive alt text for accessibility

## 🎨 Styling Customization

### Colors and Themes
- Edit CSS files in component folders
- Main styles are in `src/index.css`
- Component-specific styles are in their respective `.css` files

### Layout Modifications
- Components are in `src/components/` and `src/pages/`
- Each component accepts props for customization
- Modify JSX structure if needed

## 📱 Responsive Design

The website is fully responsive and works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

All components automatically adapt to different screen sizes.

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Run `npm run build`
2. Drag the `build` folder to [netlify.com](https://netlify.com)
3. Your site is live!

### Option 2: Vercel
1. Push code to GitHub
2. Connect repository to [vercel.com](https://vercel.com)
3. Auto-deploy on every push

### Option 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📋 Customization Checklist

- [ ] Update personal information in `portfolioConfig.js`
- [ ] Replace default images with your photos
- [ ] Update about section with your bio and skills
- [ ] Customize services you offer
- [ ] Add your portfolio/gallery images
- [ ] Update testimonials with real client feedback
- [ ] Configure EmailJS for contact form
- [ ] Test contact form functionality
- [ ] Customize colors and styling if desired
- [ ] Test on mobile and desktop
- [ ] Build and deploy

## 🐛 Troubleshooting

### Contact Form Not Working
- Check EmailJS configuration
- Verify Service ID, Template ID, and Public Key
- Test EmailJS template in their dashboard

### Images Not Loading
- Ensure images are in `src/assets/` folder
- Check import statements in `portfolioConfig.js`
- Verify image file names and extensions

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for any typos in configuration files
- Ensure all imported files exist

### Styling Issues
- Check CSS file imports
- Verify class names match between CSS and JSX
- Clear browser cache and restart development server

## 💡 Tips for Success

1. **Start Small**: Update one section at a time
2. **Test Frequently**: Check your changes in the browser
3. **Backup**: Keep a copy of the original config before major changes
4. **Mobile First**: Always test on mobile devices
5. **Optimize Images**: Compress images for faster loading
6. **SEO**: Update `public/index.html` with your meta information

## 📞 Support

If you encounter issues:

1. Check this guide for solutions
2. Review error messages in the browser console
3. Ensure all configuration syntax is correct
4. Verify all imported files exist and paths are correct

## 🎉 You're Ready!

Your portfolio website is now ready to be customized and deployed. Take your time to personalize each section and make it truly yours. Good luck with your professional online presence!

---

**Happy coding! 🚀**
