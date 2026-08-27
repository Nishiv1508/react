import type { watchedMovieData } from "../interfaces/movieData";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({
  watched,
  onDeleteWatched,
}: {
  watched: watchedMovieData[];
  onDeleteWatched: (id: string) => void;
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          onDeleteWatched={onDeleteWatched}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}
