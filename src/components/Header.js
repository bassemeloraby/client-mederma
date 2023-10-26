import { useState, Fragment } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mainPages } from "../data";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Contact from "./Contact";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="expand" bg="primary" variant="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleShow}
            className="bg-dark None"
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
                Mederma
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={handleClose}
                  className="p-2 border-bottom  border-success"
                >
                  Home
                </Nav.Link>
                {mainPages.map((mainPage) => (
                  <NavDropdown
                    title={mainPage.text}
                    id="basic-nav-dropdown"
                    key={mainPage.id}
                    className="p-2 border-bottom  border-success"
                  >
                    {mainPage.ping.map((m, index) => (
                      <NavDropdown.Item
                        as={Link}
                        to={m.link}
                        onClick={handleClose}
                        key={index}
                      >
                        {m.name} {m.icon}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ))}
              </Nav>
              <Contact/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* website name */}
          <Navbar.Brand>
            <Link
              to="/"
              className="text-light"
              style={{ textDecoration: "none" }}
            >
              <h1>Mederma</h1>
            </Link>
          </Navbar.Brand>
          {/* login icon */}
          {user ? (
            <div className="displayNone">
              <span className="me-2 border bg-warning p-2 rounded-1">
                Hello Bassem
              </span>
              <HiOutlineLogout
                onClick={onLogout}
                style={{ fontSize: "xx-large", cursor: "pointer" }}
              />
            </div>
          ) : (
            <div className="displayNone">
              <span className="me-2 border bg-warning p-2 rounded-1">
                Hello Guest
              </span>
              <HiOutlineLogin
                style={{ fontSize: "xx-large", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              />
            </div>
          )}
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
