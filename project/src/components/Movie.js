import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setvoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    {poster_path ? (
      <img src={IMG_API + poster_path} alt={title} />
    ) : (
      <img src="no-cover.png" alt={title} />
    )}
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setvoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className="movie-Over">
      <h2>Overview</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
