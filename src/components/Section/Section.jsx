import MovieCard from './MovieCard'
import './Section.css'
import { useRef } from 'react';

const Section = ({title, data}) => {
  const rowRef = useRef(null);

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <span className="see-all">See All</span>
      </div>

      <div className="row-wrapper">
        {/* LEFT BUTTON */}
        <button className="scroll-btn left" onClick={scrollLeft}>
          ‹
        </button>

        {/* MOVIE ROW */}
        <div className="card-row" ref={rowRef}>
          {data.map(item => (
            <MovieCard key={item.id} {...item} />
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button className="scroll-btn right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Section