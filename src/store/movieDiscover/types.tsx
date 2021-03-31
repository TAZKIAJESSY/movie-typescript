import { Movie } from "../types";

export type MovieState = {
  loading: boolean;
  movies: Movie[];
};

export type MovieAction =
  | { type: "movieDiscover/startLoading" }
  | { type: "movieDiscover/moviesFetched"; payload: Movie[] };
