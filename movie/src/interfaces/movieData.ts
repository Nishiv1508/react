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
