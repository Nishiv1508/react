import { useEffect, useState } from "react";
import type { movieDetails } from "../interfaces/movieData";
import StarComponent from "./StarComponent";
import Loader from "./loader";

const url: string = import.meta.env.VITE_OMDB_URL;

export default function MovieDetails({
  selectedId,
  onCloseMovie,
}: {
  selectedId: string;
  onCloseMovie: () => void;
}) {
  const [movie, setMovie] = useState<Partial<movieDetails>>({});
  const [loading, setLoading] = useState(false);
  const {
    Title: title,
    // Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating: imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      async function getMovieDetails() {
        setLoading(true);
        const res = await fetch(url + `&i=${selectedId}`);
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      }
      getMovieDetails();
    },
    [selectedId],
  );
  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>IMDb Rating: {imdbRating} </p>
            </div>
          </header>

          <section>
            <div className="rating">
              <StarComponent size={20} maxRating={10} />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
