import { useEffect, useState } from "react";
import type {
  dummyMovieData,
  // watchedMovieData,
} from "./interfaces/movieData.ts";
import type { movieResponseData } from "./interfaces/movieData.ts";

import Navbar from "./components/Navbar.tsx";
import Search from "./components/Search.tsx";
import NumResults from "./components/NumResults.tsx";
import Main from "./components/Main.tsx";
import Box from "./components/Box.tsx";
import MovieList from "./components/MovieList.tsx";
import WatchedSummary from "./components/WatchedSummary.tsx";
import WatchedMovieList from "./components/WatchedMovieList.tsx";
import Loader from "./components/loader.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";

const url: string = import.meta.env.VITE_OMDB_URL;

function App() {
  const [movies, setMovies] = useState<dummyMovieData[]>([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // const tempquery: string = "interstellar";

  useEffect(() => {
    async function fetchMovies() {
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      try {
        setLoading(true);
        const res = await fetch(url + `&s=${query}`);
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
          setError(err.message);
        } else {
          console.log("Error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {loading ? <Loader /> : <MovieList movies={movies} />} */}
          {loading && <Loader />}
          {!loading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  );
}

export default App;
