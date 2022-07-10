import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Movie = ({ movie, onClick }) => {
  return (
    <>
      <Card onClick={(e) => onClick(movie)}>
        <CardMedia component="img" image={movie.Poster} />
        <CardContent>
          <Typography>{movie.Title}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Movie;
