import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import ThemeSwitch from "ThemeSwitch";

const MyNavbar = () => {
  return (
    <div className="MyNavbar">
      <Container>
        <Navbar expand="sm">
          <Navbar.Brand href="/">WebAgency</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <div className="m-3 p-1">
                <Link className="my-link " to="/">
                  Home
                </Link>
              </div>
              <div className="m-3 p-1">
                <Link className="my-link" to="/about">
                  L'agence
                </Link>
              </div>
              <div className="m-3 p-1">
                <Link className="my-link" to="/works">
                  Projets
                </Link>
              </div>
              <ThemeSwitch />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MyNavbar;
