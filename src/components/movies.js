import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import MovieDetails from "./movieDetaile";
import Movie from "./movie";

const Movies = ({ movies, search, totalResults }) => {
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState();
  const [isOpenDalog, setIsOpenDalog] = useState(false);

  useEffect(() => {
    search(page);
  }, [page]);

  const viewMovieDetails = (movie) => {
    axios.get(`/getMovieById?movieId=${movie.imdbID}`).then((res) => {
      setSelectedMovie(res.data);
      setIsOpenDalog(true);
    });
  };

  return (
    <>
      <div className="container-movie">
        {movies.map((movie) => {
          return <Movie movie={movie} onClick={viewMovieDetails} />;
        })}
      </div>
      {page > 1 && (
        <Button variant="contained" onClick={(e) => setPage(page - 1)}>
          back
        </Button>
      )}
      page number:{page}
      {page < 100 && page < totalResults / 10 && (
        <Button variant="contained" onClick={(e) => setPage(page + 1)}>
          next
        </Button>
      )}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          isOpenDalog={isOpenDalog}
          setIsOpenDalog={setIsOpenDalog}
        />
      )}
    </>
  );
};
export default Movies;
