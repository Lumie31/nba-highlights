import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//COMPONENTS
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Teams from "./teams";
import Team from "./team";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/team/:id" component={Team} />
          <Footer />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
