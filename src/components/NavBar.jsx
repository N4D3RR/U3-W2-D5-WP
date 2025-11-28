import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, useLocation } from "react-router-dom"

const NavBar = function () {
  const location = useLocation()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
          Meteo App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              Home
            </Link>
            <Link
              to="/map"
              className={
                location.pathname === "/map"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              Weather Map
            </Link>
            <Link
              to="/favorites"
              className={
                location.pathname === "/favorites"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold text-secondary "
              }
            >
              Favorites
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
