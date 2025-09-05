# 📸 Image Upload Guide

## 🎯 Overview

This guide will help you upload and optimize images for your portfolio website. Proper image formatting ensures your photos look professional and load quickly.

## 📏 Image Requirements by Section

### 🏠 Hero Background Image
- **Recommended Size**: 1920x1080px (16:9 ratio)
- **File Format**: JPG, PNG, or WebP
- **Max File Size**: 2MB
- **Purpose**: Background image behind your name and title

**Background Sizing Options:**
- **`portrait`** - Optimized for portrait images (shows full height, positioned right)
- **`contain`** - Shows entire image without cropping (good for square images)
- **`cover`** - Fills entire area, may crop image (good for landscapes)
- **`fit`** - Stretches image to fill area (may distort proportions)

**Tips for Hero Images:**
- Use high-quality, professional photos (minimum 1920px width)
- Ensure good contrast with text overlay
- Avoid busy backgrounds that distract from text
- Consider using a subtle overlay for text readability
- For portraits, use `portrait` mode for best display
- For landscapes, use `cover` for full coverage
- Use high-resolution images to prevent blurriness
- Optimize file size without sacrificing quality

### 👤 About Section Photo
- **Recommended Size**: 800x1000px (4:5 ratio)
- **File Format**: JPG, PNG, or WebP
- **Max File Size**: 1MB
- **Purpose**: Your professional headshot or portrait

**Tips for About Photos:**
- Use a professional headshot or portrait
- Ensure good lighting and clear visibility
- Avoid overly casual or blurry photos
- Square or portrait orientation works best

### 🖼️ Portfolio Gallery Images
- **Recommended Size**: 1200x800px (3:2 ratio)
- **File Format**: JPG, PNG, or WebP
- **Max File Size**: 2MB each
- **Purpose**: Showcase your best work

**Tips for Gallery Images:**
- Use your best work samples
- Maintain consistent quality across all images
- Consider the order of images for visual flow
- Add descriptive alt text for accessibility

### 📝 Blog Post Images
- **Recommended Size**: 800x600px (4:3 ratio)
- **File Format**: JPG, PNG, or WebP
- **Max File Size**: 1MB each
- **Purpose**: Illustrate your blog posts

**Tips for Blog Images:**
- Use relevant, high-quality images
- Ensure images relate to your content
- Maintain consistent style across posts
- Optimize for web to ensure fast loading

## 🛠️ How to Upload Images

### Step 1: Prepare Your Images
1. **Resize Images**: Use the recommended dimensions above
2. **Optimize File Size**: Compress images to reduce file size
3. **Choose Format**: JPG for photos, PNG for graphics with transparency
4. **Name Files**: Use descriptive names (e.g., `hero-background.jpg`)

### Step 2: Add Images to Project
1. Navigate to `src/assets/` folder
2. Copy your images into this folder
3. Note the exact filename (including extension)

### Step 3: Update Configuration
1. Open `src/config/portfolioConfig.js`
2. Find the image imports at the top of the file
3. Add your new image imports:

```javascript
// Add your new images here
import yourHeroImage from '../assets/your-hero-image.jpg';
import yourAboutPhoto from '../assets/your-about-photo.jpg';
import yourPortfolio1 from '../assets/portfolio-1.jpg';
```

### Step 4: Update Image References
1. **Hero Image**: Update `heroConfig.backgroundImage`
2. **About Photo**: Update `aboutConfig.image`
3. **Gallery Images**: Update `photographyConfig.images`
4. **Blog Images**: Update `blogConfig.posts[].image`

### Step 5: Configure Background Sizing (Hero Section)
In `portfolioConfig.js`, update the `heroConfig` section:

```javascript
export const heroConfig = {
  backgroundImage: yourHeroImage,
  backgroundSize: 'portrait', // Options: 'portrait', 'contain', 'cover', 'fit'
};
```

**Background Size Options:**
- **`portrait`** - Optimized for portrait images (shows full height, positioned right)
- **`contain`** - Shows entire image without cropping (good for square images)
- **`cover`** - Fills entire area, may crop image (good for landscapes)
- **`fit`** - Stretches image to fill area (may distort proportions)

## 🎨 Image Optimization Tools

### Free Online Tools
- **TinyPNG**: [tinypng.com](https://tinypng.com) - Compress images
- **Squoosh**: [squoosh.app](https://squoosh.app) - Google's image optimizer
- **Canva**: [canva.com](https://canva.com) - Resize and edit images
- **GIMP**: [gimp.org](https://gimp.org) - Free image editor

### Recommended Settings
- **Quality**: 80-90% for JPG images
- **Color Space**: sRGB
- **Progressive**: Yes (for JPG)
- **Metadata**: Remove unnecessary metadata

## 📱 Responsive Image Handling

The website automatically handles different screen sizes:

### Desktop (1200px+)
- Full resolution images
- High-quality display
- Hover effects enabled

### Tablet (768px - 1199px)
- Medium resolution images
- Optimized for touch
- Maintained aspect ratios

### Mobile (767px and below)
- Compressed images
- Touch-friendly interactions
- Fast loading times

## ⚠️ Common Issues and Solutions

### Issue: Image Not Displaying
**Solution**: Check file path and import statement
```javascript
// Make sure the import path is correct
import myImage from '../assets/my-image.jpg'; // ✅ Correct
import myImage from './assets/my-image.jpg';  // ❌ Wrong
```

### Issue: Image Too Large/Slow Loading
**Solution**: Compress the image
- Use TinyPNG or similar tool
- Reduce file size to under 2MB
- Consider using WebP format

### Issue: Image Distorted/Stretched
**Solution**: Check aspect ratio
- Use recommended dimensions
- Maintain proper aspect ratio
- Test on different screen sizes

### Issue: Poor Image Quality
**Solution**: Use higher resolution source
- Start with high-quality original
- Resize down, not up
- Use appropriate file format

### Issue: Hero Image Cropped Too Much
**Solution**: Change background sizing
- Set `backgroundSize: 'contain'` in `heroConfig`
- Use portrait-oriented images (4:5 or 3:4 ratio)
- Ensure image has good composition for the visible area

### Issue: Hero Image Too Small/Empty Space
**Solution**: Adjust background sizing
- Set `backgroundSize: 'cover'` in `heroConfig`
- Use landscape-oriented images (16:9 ratio)
- Position important elements in center of image

### Issue: Blurry/Unclear Images
**Solution**: Improve image quality
- Use higher resolution source images (minimum 1920px width)
- Ensure images are not being compressed too much
- Use PNG format for images with text or sharp edges
- Check that images are not being scaled up by the browser
- Verify the image file is not corrupted

## 🔧 Advanced Customization

### Custom Image Sizes
If you need different image sizes, update the CSS:

```css
/* For custom hero image size */
.hero {
  background-size: contain; /* or cover, 100% 100% */
  background-position: center top;
}

/* For custom about image size */
.about-left img {
  max-width: 500px; /* Change from 400px */
  height: 600px; /* Fixed height */
  object-fit: cover;
}
```

### Adding Image Alt Text
For accessibility, add descriptive alt text:

```javascript
// In portfolioConfig.js
images: [
  { 
    src: photo1, 
    alt: 'Professional portrait photography session' 
  },
  { 
    src: photo2, 
    alt: 'Wedding ceremony candid moment' 
  }
]
```

## 📋 Image Upload Checklist

- [ ] Images resized to recommended dimensions
- [ ] File sizes under maximum limits
- [ ] Images added to `src/assets/` folder
- [ ] Import statements added to `portfolioConfig.js`
- [ ] Image references updated in configuration
- [ ] Alt text added for accessibility
- [ ] Tested on different screen sizes
- [ ] Images load quickly and display correctly

## 🎯 Pro Tips

1. **Consistency**: Use similar lighting and style across all images
2. **Quality**: Always use the highest quality source images
3. **Organization**: Keep image files organized with descriptive names
4. **Backup**: Keep original high-resolution images as backup
5. **Testing**: Test images on different devices and browsers
6. **Loading**: Consider using lazy loading for gallery images
7. **Format**: Use WebP for better compression when possible

## 📞 Need Help?

If you encounter issues with image uploads:

1. **Check File Paths**: Ensure all import paths are correct
2. **Verify File Names**: Check for typos in filenames
3. **Test File Formats**: Ensure you're using supported formats
4. **Check File Sizes**: Verify files are under size limits
5. **Browser Console**: Check for error messages in browser console

---

**Remember**: Good images make a huge difference in your portfolio's professional appearance! 📸✨
