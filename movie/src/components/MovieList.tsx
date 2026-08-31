import type { dummyMovieData } from "../interfaces/movieData";
import Movie from "./Movie";

export default function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: dummyMovieData[];
  onSelectMovie: (id: string) => void;
}) {
  return (
    <>
      <ul className="list list-movies">
        {movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </>
  );
}
