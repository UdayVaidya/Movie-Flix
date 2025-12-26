import React from "react";
import "./HeroBanner.css";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    id: 1,
    bgImage: "https://picsum.photos/id/1011/1200/800",
    title: "Dimensional Kids on an Adventure",
    description:
      "When two curious kids stumble into a hidden portal, they travel across magical dimensions while trying to find their way home.",
    tags: ["Drama", "Fantasy"],
  },
  {
    id: 2,
    bgImage: "https://picsum.photos/id/1015/1200/800",
    title: "Mystery of the Lost Kingdom",
    description:
      "An ancient kingdom resurfaces, and only a group of unlikely heroes can uncover the truth hidden for centuries.",
    tags: ["Mystery", "Adventure"],
  },
  {
    id: 3,
    bgImage: "https://picsum.photos/id/1021/1200/800",
    title: "Beyond the Starlight",
    description:
      "A breathtaking journey across galaxies where survival, friendship, and destiny collide.",
    tags: ["Sci-Fi", "Action"],
  },
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${currentSlide.bgImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-left">
          <span className="badge">🔥 Now Trending</span>

          <div className="tags">
            {currentSlide.tags.map((tag, index) => (
              <span key={index} >{tag}</span>
            ))}
          </div>

          <h1>{currentSlide.title}</h1>

          <p>{currentSlide.description}</p>

          <button className="watch-btn">▶ Watch Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
