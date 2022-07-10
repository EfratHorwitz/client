import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const MovieDetails = ({ isOpenDalog, setIsOpenDalog, movie }) => {
  return (
    <div class="d-inline-flex p-4">
      <Dialog onClose={(e) => setIsOpenDalog(false)} open={isOpenDalog}>
        <DialogTitle>
          <h3>{movie.Title}</h3>
        </DialogTitle>
        <img className="image" src={movie.Poster} />
        <h3>Year of publication:</h3>
        {movie.Year}
        <h3>Actors:</h3>
        {movie.Actors}
        <h3>description:</h3>
        {movie.Plot}
      </Dialog>
    </div>
  );
};

export default MovieDetails;
