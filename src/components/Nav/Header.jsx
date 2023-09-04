import { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { BsHouseDoor, BsPencil, BsBoxArrowInRight, BsFillPersonFill } from 'react-icons/bs';

const Header = () => {
  const [current, setCurrent] = useState('h');
  const [loggedIn, setLoggedIn] = useState(false); // Cambia esto según la lógica de autenticación de tu aplicación

  const onClick = (key) => {
    setCurrent(key);
  };

  const handleLogout = () => {
    // Aquí deberías implementar la lógica para realizar el logout
    setLoggedIn(false);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Bootstrap Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => onClick('h')}
              active={current === 'h'}
            >
              <BsHouseDoor /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              onClick={() => onClick('p')}
              active={current === 'p'}
            >
              <BsPencil /> Products
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {loggedIn ? (
              <NavDropdown title={<BsFillPersonFill />} id="user-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/register" onClick={() => onClick('r')}>
                  <BsFillPersonFill /> Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login" onClick={() => onClick('l')}>
                  <BsBoxArrowInRight /> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;