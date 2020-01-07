import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import ReviewDashboard from "./reviews/reviewDashboard";

import { Provider } from "react-redux";
import store from "../store";


import { Provider as AlertProvider } from "react-alert";
import Alerts from "./layout/alerts";
import AlertTemplate from "react-alert-template-basic";

import Register from "./accounts/Register";
import SignIn from "./accounts/SignIn";
import PrivateRoute from "./common/PrivateRoute";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={ReviewDashboard} />}
                  />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/signin" component={SignIn} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
