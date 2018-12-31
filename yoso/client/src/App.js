import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import Nav from './components/Nav';
import { Footer } from 'react-materialize';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyLists from './pages/MyLists';
import Pantry from './pages/Pantry';
import Recipes from './pages/Recipes';
import Waste from './pages/Waste';
import About from './pages/About';
import axios from "axios";
import './Yoso.css';

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const yosoAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    this.isAuthenticated = false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render = {(props) => (
    yosoAuth.isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/" />
  )}/>
)

class App extends Component {

  state = {}

  handleSignUp = (data, cb) => {
    const { first, last, username, email, password, street, city, state, zip } = data;
    const hash = bcrypt.hashSync(password, salt);
    axios.post('/login', { first, last, username, email, password: hash, street, city, state, zip }).then(response => {
      if(response.data) {
        yosoAuth.authenticate();
        this.setState({ name: first, email, loggedIn: true })
        if (cb) cb()
      } else console.log("Could not sign up! Please try again.");
    }).catch(err => {
      console.log("There was an error signing you in. Please try again.");
      console.log(err);
    })
  }

  handleSignIn = (data, cb) => {
    const { email, password } = data;
      axios.get('/login', { email }).then(response => {
        if(response.data) {
          const hash = response.data.password;
          bcrypt.compare(password, hash).then((res) => {
            if (res === true) {
              yosoAuth.authenticate();
              this.setState({ name: response.data.first, email, loggedIn: true })
              if (cb) cb()
            } else res.json("Incorrect Log-In Attempt. Please Try Again.");
          });
        } else console.log("Could not sign in! Please try again.");
      }).catch(err => {
        console.log("There was an error with the signup server.");
        console.log(err);
      })
    }

  render() {
    return (
      <Router>
        <div>
          <header>
            <Nav className="main-nav" loggedIn={this.state.loggedIn} />
          </header>
          <main>
            <Route exact path="/" render={() => {
              return (
                <Landing loggedIn={this.state.loggedIn} signIn={this.handleSignIn}/>
              )
            }}></Route>
            <Route exact path="/signup" render={() => {
              return (
                <SignUp signUp={this.handleSignUp} />
              )
            }}></Route>
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/lists" component={MyLists} />
            <PrivateRoute exact path="/pantry" component={Pantry} />
            <PrivateRoute exact path="/recipes" component={Recipes} />
            <PrivateRoute exact path="/waste" component={Waste} />
          </main>
          <footer>
            <Footer/>>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
