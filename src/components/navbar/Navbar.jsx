import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalNavbar from './Modal';
import Prepa from '../../../pages/Prepa';

const NavbarFix = () => {
  return (

      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
        <div className="navbar__brand-space">
                <div className="navbar__imgcontainer">
                    <img src="../../../src/assets/logo_ica_noText.png" alt="logo ica" />
                </div>
                <p className="navbar-brand">Instituto Cultural Azteca</p>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <div className='navbar__links'>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link className="navbar__links-item" href="#action1">Nosotros</Nav.Link>
                <Nav.Link className="navbar__links-item" href="#action2">Admisiones</Nav.Link>
                <NavDropdown title="Oferta Educativa" id="navbarScrollingDropdown">
                <NavDropdown.Item className="navbar__links-subitem" href="#action3">Preescolar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar__links-subitem" href="#action4">
                    Primaria
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar__links-subitem" href="#action4">
                    Secundaria
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar__links-subitem" href='#'>
                    Prepa en Línea
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navbar__links-item" href="#action1">Algebraix</Nav.Link>
                <Nav.Link className="navbar__links-item" href="#action2">Contacto</Nav.Link>
            </Nav>
            </div>
            <div className='navbar__modalBtn'>
                {<ModalNavbar/>}
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarFix;
