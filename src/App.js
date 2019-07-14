import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Layouts/HomePage";
import DetailsPage from "./Layouts/DetailsPage";
import PostsPage from "./Layouts/PostsPage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={HomePage} />
      <Route path="/posts/:number" component={DetailsPage} />
      <Route path="/posts" component={PostsPage} />
    </Switch>
  );
}

export default App;
