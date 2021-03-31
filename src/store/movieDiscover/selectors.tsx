import { ReduxState } from "../index";

export function selectMovieLoading(reduxState: ReduxState) {
  return reduxState.movieDiscover.loading;
}

export function selectMovieFetch(reduxState: ReduxState) {
  return reduxState.movieDiscover.movies;
}
