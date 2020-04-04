import React from "react";
import Items from "./Content/Items";
import "./Content.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Detail from "./Content/Detail";
import Search from "./Content/Search";

const Content = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/podcast/:podcastid">
            <Detail />
          </Route>
          <Route>
            <Search />
            <Items />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default Content;
