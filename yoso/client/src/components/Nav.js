import React, { Component } from 'react';
import { Icon, Navbar, NavItem } from 'react-materialize';
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
      <div className="z-depth-5">
        <Navbar id="main-nav" right>
          {this.props.loggedIn
            ? 
              <ul>
                <li><Link to="/lists"><Icon>format_list_numbered</Icon></Link></li>
                <li><Link to="/pantry"><Icon>kitchen</Icon></Link></li>
                <li><Link to="/waste"><Icon>pie_chart</Icon></Link></li>
                <li><Link to="/recipes"><Icon>find_in_page</Icon></Link></li>
                <li><Link to="/account"><Icon>account_circle</Icon></Link></li>
                <li><Link to="/home"><Icon>home</Icon></Link></li>
                <NavItem onClick={this.handleLogOut}><Icon>exit_to_app</Icon></NavItem>
              </ul>
            :
              <ul>
                <li><Link to="/"><Icon>home</Icon></Link></li>
              </ul>
          }
        </Navbar>
      </div>
    );
  }
};

export default Nav;