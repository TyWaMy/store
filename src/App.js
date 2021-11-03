import s from "./App.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotebook from "./pages/PageNotebook";
import FunkBicycles from "./pages/Bicycles";
import Navbar from "./components/Navbar";
import Notebooks from "./pages/NoteBooks";
import PageBicycle from "./pages/PageBicyle"
import Cameras from "./pages/Cameras"
import PageCameras  from "./pages/PageCameras"
import Refrigerators from "./pages/Refrigerators"
import PageRefrigerator from "./pages/PageRefrigerators"
import WaterFilters from "./pages/WaterFilters"
import PageWaterFilter from "./pages/PageWaterFilters"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={s.App}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Notebooks" component={Notebooks} />
            <Route path="/Notebook/:id" component={PageNotebook} />
            <Route path="/Bicycles" component={FunkBicycles} />
            <Route path="/Bicycle/:id" component={PageBicycle} />
            <Route path="/Cameras" component={Cameras} />
            <Route path="/Camera/:id" component={PageCameras} />
            <Route path="/Refrigerators" component={Refrigerators} />
            <Route path="/Refrigerator/:id" component={PageRefrigerator} />
            <Route path="/WaterFilters" component={WaterFilters} />
            <Route path="/WaterFilter/:id" component={PageWaterFilter} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
