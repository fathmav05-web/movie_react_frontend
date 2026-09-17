
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function Movies() {

  const [movies, SetMovies] = useState("");
  const [movie, SetMovie] = useState([]);

  const getMovie = async (searchMovie = "movie") => {

    let res = await fetch(
      `https://www.omdbapi.com/?apikey=11c090c5&s=${searchMovie}&y=2026&page=1`
    );

    let data = await res.json();

    if (data.Search) {
      SetMovie(data.Search);
    } else {
      SetMovie([]);
    }
  };


  useEffect(() => {
    getMovie();
  }, []);


  const handleSearch = (e) => {
    const value = e.target.value;

    SetMovies(value);

    if (value.trim() !== "") {
      getMovie(value);
    } else {
      getMovie("movie");
    }
  };


  return (
    <>
    <div className="movie-page">     <Navbar/>
      <div className="movies">
      
               <input
          type="text"
          placeholder="Search movies..."
          className="searchbox"
          value={movies}
          onChange={handleSearch}
        />
    
</div>

      <div className="movies">

        {
          movie.map((item) => (
            <MovieCard
              key={item.imdbID}
              item={item}
              showButton={true}
            />
          ))
        }

      </div>
      </div>

    </>
  );
}

export default Movies;