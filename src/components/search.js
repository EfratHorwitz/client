import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Search = ({ search, term, setTerm }) => {
  return (
    <div className="search-box">
      <TextField
        id="outlined-basic"
        label="search for movie by title"
        variant="outlined"
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button variant="contained" onClick={(e) => search()}>
        search
      </Button>
    </div>
  );
};

export default Search;
