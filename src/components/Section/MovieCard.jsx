import React from 'react'
import './MovieCard.css';


const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <img
        src={props.img}
        alt="movie poster"
        className="movie-img"
      />
      <div className="movie-overlay"></div>

      <div className="movie-content">
        <h3>{props.title}</h3>

        <div className="movie-meta">
          <span className="episode">{props.season}, {props.episode}</span>
          <span className="duration">{props.duration}</span>
        </div>

        <div className="progress-bar">
          <div className="progress" style={{width:`${props.progress}%`}}></div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard