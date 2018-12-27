import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="z-depth-5">
      <Navbar brand='Yoso' right>
        {/* PersonalList will a param
          I have an extra link, may need it later  */}
        <NavItem href='get-started.html'><Link to="/MyLists"><Icon>account_circle</Icon></Link></NavItem>
        {/* <NavItem href='get-started.html'><Link to=""><Icon>add_shopping_cart</Icon></Link></NavItem> */}
        <NavItem href='get-started.html'><Link to="/PersonalList"><Icon>format_list_numbered</Icon></Link></NavItem>
        <NavItem href='get-started.html'><Link to="/Pantry"><Icon>kitchen</Icon></Link></NavItem>
        <NavItem href='get-started.html'><Link to="/Waste"><Icon>pie_chart</Icon></Link></NavItem>
      </Navbar>
    </div>
  );
};

export default Nav;