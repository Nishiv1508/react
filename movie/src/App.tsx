import { useEffect, useState } from "react";
import type { watchedMovieData } from "./interfaces/movieData.ts";

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
import MovieDetails from "./components/MovieDetails.tsx";
import useMovies from "./hooks/useMovies.ts";

function App() {
  const [watched, setWatched] = useState<watchedMovieData[]>(() => {
    const storedValue: string = localStorage.getItem("watched") || "";
    return JSON.parse(storedValue);
  });
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // const tempquery: string = "interstellar";

  const { movies, loading, error } = useMovies(query);

  function handleSelectMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: watchedMovieData) {
    setWatched((watched) => [movie, ...watched]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

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
          {!loading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
