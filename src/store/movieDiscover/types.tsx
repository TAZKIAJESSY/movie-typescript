import { Movie } from "../types";

export type MovieState = {
  loading: boolean;
  movies: [];
};

export type MovieAction =
  | { type: "movie/startLoading" }
  | { type: "movie/moviesFetched"; payload: Movie[] };
