import React from "react";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { adminPages } from "../data";

const AdminNav = () => {
  return (
    <Nav variant="" activeKey="1" className=' bg-dark' >
      
    {adminPages.map((mainPage) => (
        <NavDropdown
          title={mainPage.text}
          id="basic-nav-dropdown"
          key={mainPage.id}
          className="p-2 border-bottom  border-success  displayNone"
        >
          {mainPage.ping.map((m, index) => (
            <NavDropdown.Item
              as={Link}
              to={m.link}
            //   onClick={handleClose}
              key={index}
            >
              {m.name} {m.icon}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      ))}
    </Nav>
  );
};

export default AdminNav;
