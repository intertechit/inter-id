import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CommonRozetler from "./pages/CommonRozetler";
import Deneme from "./pages/Deneme";
import LegendaryRozetler from "./pages/LegendaryRozetler";
import RareRozetler from "./pages/RareRozetler";
import RozetDuzenle from "./pages/RozetDuzenle";
import RozetEkle from "./pages/RozetEkle";
import TumRozetler from "./pages/TumRozetler";
import UncommonRozetler from "./pages/UncommonRozetler";
import UniqueRozetler from "./pages/UniqueRozetler";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/rozet-ekle" component={RozetEkle} />
        <Route exact path="/rozet-duzenleme" component={RozetDuzenle} />
        <Route exact path="/legendary-rozetler" component={LegendaryRozetler} />
        <Route exact path="/unique-rozetler" component={UniqueRozetler} />
        <Route exact path="/rare-rozetler" component={RareRozetler} />
        <Route exact path="/uncommon-rozetler" component={UncommonRozetler} />
        <Route exact path="/common-rozetler" component={CommonRozetler} />
        <Route exact path="/tum-rozetler" component={TumRozetler} />
      </Switch>
    </Router>
  );
}
