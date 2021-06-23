import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Han from "./pages/Han";
import RozeteYorum from "./pages/RozeteYorum";
import Rozetler from "./pages/Rozetler";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/han" component={Han} />
        <Route exact path="/rozete-yorum" component={RozeteYorum} />
        <Route exact path="/rozetler" component={Rozetler} />
      </Switch>
    </Router>
  );
}
