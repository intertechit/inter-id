import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Badges from "./pages/Badges";
import BadgesEntry from "./pages/Badges/Entry";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/entry" component={BadgesEntry} />
      </Switch>
    </Router>
  );
}
