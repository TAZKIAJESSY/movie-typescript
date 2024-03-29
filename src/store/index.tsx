// src/store/index.ts
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import movieReducer from "./movieDiscover/reducer";

const rootReducer = combineReducers({
  movieDiscover: movieReducer,
});

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(rootReducer, enhancer);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
