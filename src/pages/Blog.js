import Slider from "react-slick";
import "./Blog.css";

const BlogSection = ({ posts, id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section className="blog-section" id={id || 'blog'}>
      <div className="blog-container">
        <div className="blog-header">
          <h2>Blog Posts</h2>
        </div>
        <div className="blog-slider-wrapper">
          <Slider {...settings} className="blog-slider">
            {posts.map((blog, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-image-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                </div>
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p className="blog-date">{blog.date}</p>
                  <p>{blog.description}</p>
                  <a href={blog.link} className="blog-button">
                    Go to Blog
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
