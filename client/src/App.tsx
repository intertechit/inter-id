import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CommonRozetSahipleri from "./pages/CommonRozetSahipleri";
import Han from "./pages/Han";
import KullaniciDuzenle from "./pages/KullaniciDuzenle";
import LegendaryRozetSahipleri from "./pages/LegandaryRozetSahipleri";
import RareRozetSahipleri from "./pages/RareRozetSahipleri";
import RozeteYorum from "./pages/RozeteYorum";
import Rozetler from "./pages/Rozetler";
import RozetOnay from "./pages/RozetOnay";
import Sıralamalar from "./pages/Sıralamalar";
import TumRozetler from "./pages/TumRozetler";
import UncommonRozetSahipleri from "./pages/UncommonRozetSahipleri";
import UniqueRozetSahipleri from "./pages/UniqueRozetSahipleri";
import YıldızToplayıcılar from "./pages/YıldızToplayıcılar";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/han" component={Han} />
        <Route exact path="/rozete-yorum" component={RozeteYorum} />
        <Route exact path="/" component={Rozetler} />
        <Route exact path="/kullanici-duzenle" component={KullaniciDuzenle} />
        <Route exact path="/rozet-onay" component={RozetOnay} />
        <Route exact path="/siralamalar" component={Sıralamalar} />
        <Route exact path="/rare-sahipleri" component={RareRozetSahipleri} />
        <Route exact path="/tum-rozetler" component={TumRozetler} />
        <Route
          exact
          path="/yildiz-toplayicilar"
          component={YıldızToplayıcılar}
        />
        <Route
          exact
          path="/legendary-sahipleri"
          component={LegendaryRozetSahipleri}
        />
        <Route
          exact
          path="/common-sahipleri"
          component={CommonRozetSahipleri}
        />

        <Route
          exact
          path="/uncommon-sahipleri"
          component={UncommonRozetSahipleri}
        />
        <Route
          exact
          path="/unique-sahipleri"
          component={UniqueRozetSahipleri}
        />
      </Switch>
    </Router>
  );
}
