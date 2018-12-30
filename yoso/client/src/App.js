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
<<<<<<< HEAD
              <div className="container">
                <Route exact path="/" component={Login} />
                <Route exact path="/MyLists" component={MyLists} />
                <Route exact path="/Pantry" component={Pantry} />
                {/* personal list will need a param in order for it to go to the right list */}
                <Route exact path="/PersonalList" component={PersonalList} />
                <Route exact path="/Waste" component={Waste} />
              </div>
=======
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/lists" component={MyLists} />
              <Route exact path="/pantry" component={Pantry} />
              <Route exact path="/recipes" component={Recipes} />
              <Route exact path="/waste" component={Waste} />
>>>>>>> bryan
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
