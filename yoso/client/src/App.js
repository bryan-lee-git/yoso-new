import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Nav from './components/Nav';
import Login from './pages/Login';
import MyLists from './pages/MyLists';
import Pantry from './pages/Pantry';
import PersonalList from './pages/PersonalList';
import Waste from './pages/Waste';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <Nav />
            </header>

            <main>
              <Route exact path="/" component={Login} />
              <Route exact path="/MyLists" component={MyLists} />
              <Route exact path="/Pantry" component={Pantry} />
              {/* personal list will need a param in order for it to go to the right list */}
              <Route exact path="/PersonalList" component={PersonalList} />
              <Route exact path="/Waste" component={Waste} />
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
