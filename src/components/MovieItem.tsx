import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSearchMovies } from "../store/movieDiscover/actions";
import {
  selectMovieLoading,
  selectMovieFetch,
} from "../store/movieDiscover/selectors";

export default function MovieItem() {
  const dispatch = useDispatch();

  const loading = useSelector(selectMovieLoading);
  const movies = useSelector(selectMovieFetch);

  const [searchText, setSearchText] = useState("");

  function handleChange(e: any) {
    console.log("Search term ", e.target.value);

    setSearchText(e.target.value);
  }

  useEffect(() => {
    dispatch(fetchSearchMovies(searchText));
  }, [dispatch, searchText]);

  return (
    <div
      style={{
        margin: 20,
        marginTop: 200,
        fontSize: 25,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "pink", padding: 30 }}>
        Search for favourite movies!
      </div>

      <form>
        <input type="text" value={searchText} onChange={handleChange}></input>
      </form>
    </div>
  );
}
