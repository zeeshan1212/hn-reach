import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AskStories from "./components/AskStories";
import Dashboard from "./components/Dashboard";
import JobStories from "./components/JobStories";
import ShowStories from "./components/ShowStories";
import Stories from "./components/Stories";
import User from "./components/User";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard searchValue={searchValue} setSearchValue={setSearchValue} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/top" />
          </Route>
          <Route exact path="/top">
            <Stories searchValue={searchValue} />
          </Route>
          <Route path="/user/:id">
            <User searchValue={searchValue} />
          </Route>
          <Route path="/ask">
            <AskStories searchValue={searchValue} />
          </Route>
          <Route path="/job">
            <JobStories searchValue={searchValue} />
          </Route>
          <Route path="/show">
            <ShowStories searchValue={searchValue} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
