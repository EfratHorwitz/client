import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./components/search";
import Movies from "./components/movies";
import NotFoundMovie from "./components/notFountMovie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const [term, setTerm] = useState("sky");

  const searchMovies = (page = 1) => {
    axios.get(`/getMovies?term=${term}&page=${page}`).then((res) => {
      setMovies(res.data.Search);
      setTotalResults(res.data.totalResults);
    });
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="App">
      <Search search={searchMovies} term={term} setTerm={setTerm} />
      {movies && (
        <Movies
          movies={movies}
          search={searchMovies}
          totalResults={totalResults}
        />
      )}
      {!movies && <NotFoundMovie search={term} />}
    </div>
  );
};
export default App;
