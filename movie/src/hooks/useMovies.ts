import type { dummyMovieData } from "../interfaces/movieData.ts";
import { useEffect, useState } from "react";
import type { movieResponseData } from "../interfaces/movieData.ts";

const url: string = import.meta.env.VITE_OMDB_URL;

export default function useMovies(query: string) {
  const [movies, setMovies] = useState<dummyMovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      try {
        setLoading(true);
        const res = await fetch(url + `&s=${query}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data: movieResponseData = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setError("");
        setMovies(data.Search);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } else {
          console.log("Error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();

    //cleanup function
    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, loading, error };
}
