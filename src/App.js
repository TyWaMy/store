import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import PageNotebook from "./pages/PageNotebook";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Notebook" component={PageNotebook} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
