import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = function () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Meteo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Weather Map</Nav.Link>
            <NavDropdown title="Utility" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Favorites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Maps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Webcams</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
