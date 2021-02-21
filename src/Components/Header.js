import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar light color="light" expand="md" className="sticky-top">
        <div className="container">
          <NavbarBrand id="logo" className="text-danger mr-4"><Link to="/home"><i class="fas fa-utensils"></i> RecipesWorld</Link></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/recipes">Recipes</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
}
export default Header;

