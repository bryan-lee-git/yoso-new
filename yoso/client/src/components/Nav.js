import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import '../Yoso.css';


const Nav = () => {
  return (
    <div className="z-depth-5">
      <Navbar id="main-nav" brand='YOSO' right>
        {/* PersonalList will a param
          I have an extra link, may need it later  */}
        <NavItem><Link to="/lists"><Icon>format_list_numbered</Icon></Link></NavItem>
        <NavItem><Link to="/pantry"><Icon>kitchen</Icon></Link></NavItem>
        <NavItem><Link to="/waste"><Icon>pie_chart</Icon></Link></NavItem>
        <NavItem><Link to="/recipes"><Icon>find_in_page</Icon></Link></NavItem>
        <NavItem><Link to="/account"><Icon>account_circle</Icon></Link></NavItem>
      </Navbar>
    </div>
  );
};

export default Nav;