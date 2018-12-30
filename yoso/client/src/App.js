import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import MyLists from './pages/MyLists';
import Pantry from './pages/Pantry';
import Recipes from './pages/Recipes';
import Waste from './pages/Waste';

import './Yoso.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <Nav className="main-nav" />
            </header>

            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/lists" component={MyLists} />
              <Route exact path="/pantry" component={Pantry} />
              <Route exact path="/recipes" component={Recipes} />
              <Route exact path="/waste" component={Waste} />
            </main>

            <footer>
              {/* Some cool footer here */}
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
