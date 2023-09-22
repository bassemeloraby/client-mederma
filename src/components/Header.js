import { useState, Fragment } from "react";

import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mainPages } from "../data";
import { HiOutlineLogin } from "react-icons/hi";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="expand" bg="primary" variant="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Medderma
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {mainPages.map((mainPage) => (
                  <NavDropdown
                    title={mainPage.text}
                    id="basic-nav-dropdown"
                    key={mainPage.id}
                  >
                    {mainPage.ping.map((m, index) => (
                      <NavDropdown.Item
                        as={Link}
                        to={m.link}
                        onClick={handleClose}
                        key={index}
                      >
                        {m.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* website name */}
          <Navbar.Brand>
            <Link
              to="/"
              className="text-light"
              style={{ textDecoration: "none" }}
            >
              <h1>Medderma</h1>
            </Link>
          </Navbar.Brand>
          {/* login icon */}
          <HiOutlineLogin />
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
