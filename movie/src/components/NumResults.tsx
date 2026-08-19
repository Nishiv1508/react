import type { dummyMovieData } from "../interfaces/movieData";

export default function NumResults({ movies }: { movies: dummyMovieData[] }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
