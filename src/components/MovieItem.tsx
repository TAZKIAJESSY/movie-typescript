import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSearchMovies } from "../store/movieDiscover/actions";
import { selectMovieFetch } from "../store/movieDiscover/selectors";

type GetSearchState =
  | { status: "idle" }
  | { status: "searching" }
  | { status: "done" };

export default function MovieItem() {
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState<GetSearchState>({
    status: "idle",
  });

  const dispatch = useDispatch();
  const movies = useSelector(selectMovieFetch);
  //const queryParam = encodeURIComponent(searchText);

  function handleChange(e: any) {
    //console.log("Search term ", e.target.value);

    setSearchText(e.target.value);
  }

  //useEffect is not effective for query string search term bcoz everytime you search it renders Api as dependency changes
  const search = () => {
    // console.log("Start searching for:", searchText);

    if (!searchText || searchText === "") {
      //if queryParam not defined or empty then set to idle just return this other than go check lower steps
      setSearchState({ status: "idle" });
      return;
    }
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryText = encodeURIComponent(searchText);
    setSearchState({ status: "searching" });

    dispatch(fetchSearchMovies(queryText));

    setSearchState({ status: "done" });
  };

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
      <div style={{ backgroundColor: "beige", padding: 30 }}>
        Don't wait :) Hurry up! MOviesssssss...
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{ margin: 20 }}
      >
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
        ></input>{" "}
        <button
          onClick={search}
          style={{ padding: 13, background: "grey", fontSize: 20 }}
        >
          Search
        </button>
      </form>

      {searchState.status === "idle" ? (
        <p>Search for your favourite movies!</p>
      ) : null}
      {searchState.status === "searching" ? <p>Searching...</p> : null}
      {searchState.status === "done" ? (
        movies && movies.length > 0 ? (
          <div>
            {movies.map((m, index) => {
              return (
                <div key={index}>
                  <h1>{m.Title}</h1>
                  <p>{m.Year}</p>
                  <p>imdbID: {m.imdbID}</p>

                  <img src={m.Poster} alt="" />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No Results found...</p>
        )
      ) : null}
    </div>
  );
}
