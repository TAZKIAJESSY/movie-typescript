import axios from "axios";
import { Dispatch } from "redux";
import { ReduxState } from "..";
import { MovieAction } from "./types";
import { Movie } from "../types";

const API_URL = `http://www.omdbapi.com/?apikey=cfa1dcb4`;

export const startLoading = (): MovieAction => ({
  type: "movieDiscover/startLoading",
});

export const moviesFetched = (moreMovies: Movie[]): MovieAction => ({
  type: "movieDiscover/moviesFetched",
  payload: moreMovies,
});

export const fetchSearchMovies = (search_input: string) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  dispatch(startLoading());

  const response = await axios.get(`${API_URL}&s=${search_input}`);
  const moreMovies = response.data;
  dispatch(moviesFetched(moreMovies));
};
