export interface dummyMovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface watchedMovieData extends dummyMovieData {
  runtime: number;
  imdbRating: number;
  userRating: number;
}

export interface movieResponseData {
  Search: dummyMovieData[];
  totalResults: string;
  Response: string;
}

export interface movieDetails extends dummyMovieData {
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}
