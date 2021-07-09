import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Badges from "./pages/Badges";
import BadgesEntry from "./pages/Badges/Entry";
import Comments from "./pages/Comments";
import Login from "./pages/Login";
import Ranks from "./pages/Ranks";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Badges} />
        <Route exact path="/badges/entry" component={BadgesEntry} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/ranks" component={Ranks} />
      </Switch>
    </Router>
  );
}
