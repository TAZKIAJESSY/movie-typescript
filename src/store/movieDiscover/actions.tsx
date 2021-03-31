import axios from "axios";
import { Dispatch } from "redux";
import { ReduxState } from "..";
import { MovieAction } from "./types";
import { Movie } from "../types";

const API_URL = `http://www.omdbapi.com/?apikey=cfa1dcb4`;

export const startLoading = (): MovieAction => ({
  type: "movieDiscover/startLoading",
});

export const moviesFetched = (movieList: Movie[]): MovieAction => ({
  type: "movieDiscover/moviesFetched",
  payload: movieList,
});

export const fetchSearchMovies = (search_input: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  dispatch(startLoading());

  //const settle = getState().movieDiscover.movies;

  const response = await axios.get(`${API_URL}&s=${search_input}`);
  console.log("searched movies: ", response.data.Search);
  const moreMovies = response.data.Search;
  dispatch(moviesFetched(moreMovies));
};
