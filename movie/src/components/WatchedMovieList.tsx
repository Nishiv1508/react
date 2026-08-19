import type { watchedMovieData } from "../interfaces/movieData";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({
  watched,
}: {
  watched: watchedMovieData[];
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
