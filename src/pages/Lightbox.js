import React, { useEffect } from "react";
import "./Lightbox.css";

const Lightbox = ({ images, currentIndex, onClose, setCurrentIndex }) => {
    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [images.length]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="nav-arrow prev" onClick={goPrev}>
                    ◀
                </button>
                <img src={images[currentIndex].src} alt="" />
                <button className="nav-arrow next" onClick={goNext}>
                    ▶
                </button>
            </div>
        </div>
    );
};

export default Lightbox;
