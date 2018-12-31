import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../Yoso.css';


const Nav = (props) => {
  return (
    <div className="z-depth-5">
        {props.loggedIn ? 
          <Navbar id="main-nav" right>
            <NavItem><Link to="/lists"><Icon>format_list_numbered</Icon></Link></NavItem>
            <NavItem><Link to="/pantry"><Icon>kitchen</Icon></Link></NavItem>
            <NavItem><Link to="/waste"><Icon>pie_chart</Icon></Link></NavItem>
            <NavItem><Link to="/recipes"><Icon>find_in_page</Icon></Link></NavItem>
            <NavItem><Link to="/account"><Icon>account_circle</Icon></Link></NavItem>
            <NavItem><Link to="/home"><Icon>home</Icon></Link></NavItem>
            <NavItem onClick={props.signOut}><Icon>exit</Icon></NavItem>
          </Navbar>
          :
          <Navbar id="main-nav" right>
            <NavItem><Link to="/"><Icon>home</Icon></Link></NavItem>
          </Navbar>
        }
        
    </div>
  );
};

export default Nav;