import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navigation from './Navigation.js'
import Wardrobes from './Header.js'
import How from './How.js'
import Questions from './Form.js'
import Results from './Results.js'
import Footer from './Footer.js'


  function App() {
    return (
      <div className="App">
        <Router>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Wardrobes} />
              <Route exact path="/how" component={How} />
              <Route path="/form" component={Questions} />
              <Route path="/results/:csize/:ssize/:budget/:color" component={Results} />
            </Switch>
            <Footer />
        </Router>
      </div>
    );


  }

export default App;
