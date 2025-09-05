import React, { useEffect, useState } from "react";
import "./Services.css";
import { FaCamera, FaMicrophone, FaLaptopCode, FaPaintBrush, FaCode, FaBullhorn } from "react-icons/fa";

const Services = ({ services, heading, id }) => {
    const [flippedIndex, setFlippedIndex] = useState(null);
    const isMobile = window.innerWidth < 768;

    // Function to render icons based on icon name
    const renderIcon = (iconName) => {
        const iconMap = {
            FaCamera: <FaCamera />,
            FaMicrophone: <FaMicrophone />,
            FaLaptopCode: <FaLaptopCode />,
            FaPaintBrush: <FaPaintBrush />,
            FaCode: <FaCode />,
            FaBullhorn: <FaBullhorn />
        };
        return iconMap[iconName] || <FaCode />; // Default icon if not found
    };

    useEffect(() => {
        if (!isMobile) return;

        let index = 0;

        const interval = setInterval(() => {
            setFlippedIndex(index);
            setTimeout(() => setFlippedIndex(null), 1500); // flip back after 1.5s

            index = (index + 1) % services.length;
        }, 3000);

        return () => clearInterval(interval);
    }, [isMobile, services.length]);

    return (
        <section className="services-section" id={id || 'services'}>
            <h2 className="section-title">{heading || 'My Services'}</h2>
            <div className="services-grid">
                {services.map((item, index) => (
                    <div className="flip-card" key={index}>
                        <div
                            className={`flip-card-inner ${isMobile && flippedIndex === index ? "flipped" : ""
                                }`}
                        >
                            <div className="flip-card-front">
                                <div className="icon">{renderIcon(item.icon)}</div>
                                <h3>{item.title}</h3>
                            </div>
                            <div className="flip-card-back">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
