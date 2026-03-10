import { moviesData } from "./moviesData";

import { useState } from "react";

import "./MovieSearch.css";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [favourites, setFavourites] = useState([]);

  const handleReset = () => {
    setSearchTerm("");
  };

  const searchLower = searchTerm.trim().toLowerCase();

  const filteredMovies = searchLower ===""? [] : (moviesData.filter((movie) => {
   
    return (
      movie.title.toLowerCase().includes(searchLower) ||
      movie.genre.toLowerCase().includes(searchLower) ||
      movie.year.toString().includes(searchLower)
    );
  
  }));

  const handleFavouriteMovies = (movieId) => {
    if (favourites.includes(movieId)) {
      setFavourites(favourites.filter((id) => movieId !== id));
    } else {
      setFavourites([...favourites, movieId]);
    }
  };

  const favouriteMovieList = moviesData.filter((movie) =>
    favourites.includes(movie.id)
  );

  return (
    <div className="movie-container">
      <div className="header">
        <h1>Movie Explorer</h1>
        <p>
          Search, filter and favourite movies. Designed for a single-page React
          Component Structure.
        </p>
        {searchTerm.trim() === "" && <p>Start typing to search movies</p>}

        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder='Search Movies...(e.g. "Gifted", "Shutter Island")'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="reset-btn" onClick={handleReset}>
            ↺ Reset
          </button>
        </div>

        {searchTerm && (
          <p>
            {filteredMovies.length} result
            {filteredMovies.length !== 1 ? "s" : ""} for {`"${searchTerm}"`}
          </p>
        )}
      </div>

      <div className="body">
        <div className="matching-movies">
          <h2>Matching Movies</h2>

          {searchTerm !== "" && filteredMovies.length === 0 && (
            <p>No Movies Found</p>
          )}

          {searchTerm !== "" && filteredMovies.length > 0 && (
            <div>
              {filteredMovies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                  <div className="movie">
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <p>{movie.genre}</p>
                  </div>
                  <div className="rating">
                    <p className="rating-field">⭐ {movie.rating.toFixed(1)}</p>
                    <button
                      className={`btn ${
                        favourites.includes(movie.id)
                          ? "favourited"
                          : "favourite"
                      }`}
                      onClick={() => handleFavouriteMovies(movie.id)}
                    >
                      {favourites.includes(movie.id)
                        ? "♡  Favourited"
                        : "♡  Favourite"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="favourite-section">
          <h2>Favourite Movies ({favourites.length}) </h2>

          {favouriteMovieList.length === 0 ? (
            <p> You haven't added any favourites yet.</p>
          ) : (
            favouriteMovieList.map((movie) => (
              <div
                className="fav-card"
                key={movie.id}
                onClick={() => handleFavouriteMovies(movie.id)}
              >
                <h3>
                  ♡ {movie.title} ({movie.year})
                </h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
