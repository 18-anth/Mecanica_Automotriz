import './App.css';
import Galeria from './pages/Gallery/Galeria';
import React, { Component } from 'react'
import Login from './pages/Login/Login';
import Singup from './pages/Register/Singup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './pages/Home/Home';
import Fooder from './Components/Foolder/Fooder';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Nav />

            <Switch>
              <Route path="/Mecanica_Automotriz" exact component="" />
              <Route path="/Gallery" exact component={Galeria} />
              <Route path="/Login" component={Login} />
              <Route path="/SingUp" component={Singup} />
            </Switch>
          </Router>
          <Home />
          <Fooder />
        </div>
      </>
    );
  };
}

export default App;
