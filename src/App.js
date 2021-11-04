import s from "./App.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FunkBicycles from "./pages/Bicycles";
import Navbar from "./components/Navbar";
import Notebooks from "./pages/NoteBooks";
import Cameras from "./pages/Cameras";
import Refrigerators from "./pages/Refrigerators";
import WaterFilters from "./pages/WaterFilters";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={s.App}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Notebooks" component={Notebooks} />
            <Route path="/Bicycles" component={FunkBicycles} />
            <Route path="/Cameras" component={Cameras} />
            <Route path="/Refrigerators" component={Refrigerators} />
            <Route path="/WaterFilters" component={WaterFilters} />

            <Route path="/camera/:id" component={Product} />
            <Route path="/refrigerator/:id" component={Product} />
            <Route path="/notebook/:id" component={Product} />
            <Route path="/bicycle/:id" component={Product} />
            <Route path="/waterFilter/:id" component={Product} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
