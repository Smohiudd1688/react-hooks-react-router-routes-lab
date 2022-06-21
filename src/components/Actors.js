import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = actors.map(actor => {
    const renderMovies = actor.movies.map(movie => {
      return (
        <li key={movie}>
          {movie}
        </li>
      );
    });

    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ul>
          {renderMovies}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
}

export default Actors;
