import s from "./App.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={s.App}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/notebooks" component={ProductList} />
            <Route path="/bicycles" component={ProductList} />
            <Route path="/cameras" component={ProductList} />
            <Route path="/refrigerators" component={ProductList} />
            <Route path="/waterFilters" component={ProductList} />

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
