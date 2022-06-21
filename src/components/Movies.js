import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map(movie => {
    const renderGenres = movie.genres.map(genre => {
      return (
        <li key={genre}>
          {genre}
        </li>
      );
    });

    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {renderGenres}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
}

export default Movies;
