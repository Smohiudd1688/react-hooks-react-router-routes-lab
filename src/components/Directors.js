import React from "react";
import { directors } from "../data";

function Directors() {
  const renderDirectors = directors.map(director => {
    const renderMovies = director.movies.map(movie => {
      return (
        <li key={movie}>
          {movie}
        </li>
      );
    });

    return (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>
          {renderMovies}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors;
