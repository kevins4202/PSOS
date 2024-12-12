import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import psosLogo from '../assets/icons/psos_logo.png';


const Header = () => {
  return (
    <Navbar expand="lg" id="header" className="w-100 navbar-light" style={{ backgroundColor: '#ffcbc4', width: '100vw', margin: 0, padding: 0 }} data-bs-theme="light">
      <Container fluid style={{ margin: 0, maxWidth: '100%' }}>
        <div className="navbar-brand">
          <Navbar.Brand href="/">
            <img
              src={psosLogo}
              style={{ height: '100px', marginRight: '3%' }}
              alt="PSOS Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <span style={{ fontFamily: 'Marmelad, serif', fontSize: '30px' }}>
              project Save our Skin
            </span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link className="link-dark" href="./index.html">HOME</Nav.Link>
            <Nav.Link className="link-dark" href="./aboutus.html">ABOUT US</Nav.Link>
            <Nav.Link className="link-dark" href="./events.html">EVENTS</Nav.Link>
            <Nav.Link className="link-dark" href="./getinvolved.html">GET INVOLVED</Nav.Link>
            <Nav.Link className="link-dark" href="./blog.html">BLOG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;