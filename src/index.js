import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { resetStyles } from "resetStyles";
import { Router, Route, Switch } from "react-router-dom";
import routes from "routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <Global styles={resetStyles} />
      <Router history={history}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.name} component={route.component} path={route.path} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
