import { MovieState, MovieAction } from "./types";

const initialState: MovieState = {
  loading: false,
  movies: [],
};

export default function movieReducer(
  state = initialState,
  action: MovieAction
) {
  switch (action.type) {
    case "movieDiscover/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "movieDiscover/moviesFetched": {
      return {
        loading: false,
        movies: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
