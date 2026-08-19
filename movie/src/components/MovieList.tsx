import type { dummyMovieData } from "../interfaces/movieData";
import Movie from "./Movie";

export default function MovieList({ movies }: { movies: dummyMovieData[] }) {
  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </>
  );
}
