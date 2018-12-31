import React, { Component } from 'react';
import { Icon, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../Yoso.css';


class Nav extends Component {

  state = {}

  handleLogOut = e => {
    e.preventDefault();
    this.props.logOut();
  }

  render() {

    return (
      <nav id="main-nav" className="z-depth-5">
        <div className="container">
          <div className="nav-wrapper">
            {this.props.loggedIn
              ? 
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/lists"><Icon>format_list_numbered</Icon></Link></li>
                  <li><Link to="/pantry"><Icon>kitchen</Icon></Link></li>
                  <li><Link to="/waste"><Icon>pie_chart</Icon></Link></li>
                  <li><Link to="/recipes"><Icon>find_in_page</Icon></Link></li>
                  <li><Link to="/account"><Icon>account_circle</Icon></Link></li>
                  <li><Link to="/home"><Icon>home</Icon></Link></li>
                  <NavItem onClick={this.handleLogOut}><Icon>exit_to_app</Icon></NavItem>
                </ul>
              :
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/"><Icon>home</Icon></Link></li>
                </ul>
            }
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;