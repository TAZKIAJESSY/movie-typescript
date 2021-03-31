import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSearchMovies } from "../store/movieDiscover/actions";
import { selectMovieFetch } from "../store/movieDiscover/selectors";

export default function MovieItem() {
  const dispatch = useDispatch();

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

      <form style={{ margin: 20 }}>
        <input
          style={{
            padding: 20,
            borderWidth: 3,
            display: "inline-block",
            color: "blue",
          }}
          type="text"
          value={searchText}
          onChange={handleChange}
        ></input>
      </form>

      {!movies ? (
        <p>Loading....</p>
      ) : (
        <div>
          {movies.map((m, index) => {
            return (
              <div key={index}>
                <h1>{m.Title}</h1>
                <p>{m.Year}</p>
                <img src={m.Poster} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
