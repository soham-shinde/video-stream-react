import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getMoviesList } from "../api/api-module";

export default function Navbar() {
  const searchRef = useRef(null);
  const [moviesList, setMoviesList] = useState([]);
  const handleSearchInputChange = (event) => {
    if (event.target.value == "") {
      setFilteredMovies([]);
      return;
    }
    var filtered = moviesList.filter((movie) =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredMovies([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    const data = getMoviesList();
    setMoviesList(data);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/img/logo.svg" alt="" />
        Video Stream
      </div>
      <ul className="ul-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies-list">Movies</Link>
          <ul className="sub-list">
            <li>
              <Link to="/movies-list">All Movies</Link>
            </li>
            <li>
              Genres
              <ul className="sub-list-2">
                <li>
                  <Link to="/movies-list">Science Fiction</Link>
                </li>
                <li>
                  <Link to="/movies-list">Fantasy</Link>
                </li>
                <li>
                  <Link to="/movies-list">Adventure</Link>
                </li>
                <li>
                  <Link to="/movies-list">Action</Link>
                </li>
                <li>
                  <Link to="/movies-list">Animated</Link>
                </li>
                <li>
                  <Link to="/movies-list">Mystery</Link>
                </li>
                <li>
                  <Link to="/movies-list">Thriller</Link>
                </li>
                <li>
                  <Link to="/movies-list">Horror</Link>
                </li>
                <li>
                  <Link to="/movies-list">Comedy</Link>
                </li>
                <li>
                  <Link to="/movies-list">Drama</Link>
                </li>
                <li>
                  <Link to="/movies-list">Romantic</Link>
                </li>
                <li>
                  <Link to="/movies-list">Biography</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/movies-list">Language</Link>
              <ul className="sub-list-2">
                <li>
                  <Link to="/movies-list">Hindi</Link>
                </li>
                <li>
                  <Link to="/movies-list">English</Link>
                </li>
                <li>
                  <Link to="/movies-list">Tamil</Link>
                </li>
                <li>
                  <Link to="/movies-list">Telugu</Link>
                </li>
                <li>
                  <Link to="/movies-list">Malayalam</Link>
                </li>
                <li>
                  <Link to="/movies-list">Kannada</Link>
                </li>
                <li>
                  <Link to="/movies-list">Bengali</Link>
                </li>
                <li>
                  <Link to="/movies-list">Marathi</Link>
                </li>
                <li>
                  <Link to="/movies-list">Punjabi</Link>
                </li>
                <li>
                  <Link to="/movies-list">Gujarati</Link>
                </li>
                <li>
                  <Link to="/movies-list">Korean</Link>
                </li>
                <li>
                  <Link to="/movies-list">Japanese</Link>
                </li>
                <li>
                  <Link to="/movies-list">Spanish</Link>
                </li>
                <li>
                  <Link to="/movies-list">French</Link>
                </li>
                <li>
                  <Link to="/movies-list">Chinese</Link>
                </li>
                <li>
                  <Link to="/movies-list">German</Link>
                </li>
                <li>
                  <Link to="/movies-list">Italian</Link>
                </li>
                <li>
                  <Link to="/movies-list">Portuguese</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <div ref={searchRef} className="nav-search-bar">
        <input
          type="text"
          className="nav-i"
          placeholder="Search favorite movie here"
          onChange={handleSearchInputChange}
        />

        {filteredMovies.length > 0 && (
          <div className="nav-search-card">
            {filteredMovies.slice(0, 5).map((suggestion, index) => (
              <li key={index}>
                <Link
                  to={`/movie-player/${suggestion.title}`}
                  onClick={() => {
                    setFilteredMovies([]);
                  }}
                >
                  {suggestion.title}
                </Link>
              </li>
            ))}
          </div>
        )}
      </div>
      <div className="sd-s">
        <li>
          <Link to="/">
            <img src="/img/heart-icon.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <img src="/img/user-icon.svg" alt="" />
          </Link>
        </li>
      </div>
    </nav>
  );
}
