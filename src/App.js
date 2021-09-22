import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Pages/Homepage";
import { ContextOneProvider } from "./Context/AppContext";
function App() {
  return (
    <ContextOneProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ContextOneProvider>
  );
}

export default App;
