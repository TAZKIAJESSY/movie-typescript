import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MovieDiscover from "./pages/MovieDiscover";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/discover" component={MovieDiscover} />
      </Switch>
    </div>
  );
}

export default App;
