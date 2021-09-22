import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavigationContainer from "./navigation/navigation-container"
import Footer from "./navigation/footer";
import Drills from "./pages/drills";
import About from "./pages/about";
import Home from "./pages/home";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Defense from "./pages/defense";
import Shooting from "./pages/shooting";
import Handling from "./pages/handling";
import LoginForm from "./forms/loginForm";

export default class App extends Component {
  constructor(){

    super()

    this.state = {}
  }
  render() {
    return (
      <div className='app'>
        <Router>

            <NavigationContainer/>
          <Switch> 
            <Route exact path="/" component={Home}/>
            <Route path="/about-me" component={About}/>
            <Route path="/drills" component={Drills}/>
            <Route path="/login" component={Login}/>
            <Route path="/loginForm" component={LoginForm}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/defense" component={Defense}/>
            <Route path="/handling" component={Handling}/>
            <Route path="/shooting" component={Shooting}/>
          </Switch>
            <Footer/>
        </Router>


          
      </div>
    );
  }
}
