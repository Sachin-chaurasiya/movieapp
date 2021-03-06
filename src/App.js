import React from "react";
import SearchMovies from "./components/SearchMovies/SearchMovies";
import "./components/SearchMovies/SearchMovies.css";
import movieimg from "./assets/film-reel.png";
function App() {
  return (
    <div className="container">
      <h1 className="title">
        <img src={movieimg} alt="movie-reel" className="movieimg" /> Movie
        Search App
      </h1>
      <SearchMovies />
      <p style={{ textAlign: "center" }}>
        &copy;2020 Created By Sachin Chaurasiya
      </p>
    </div>
  );
}

export default App;
