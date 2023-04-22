import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import user from '../images/user.png';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className='navbar navbar-light bg-white'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
          <li className="nav-item">
          <Link  to="/" className="nav-link " >Home</Link>
          </li>
            <li className="nav-item">
          <Link  to="/MyCalendar" className="nav-link " >My Calendar</Link>
          </li>
            
            <NavDropdown title="Widgets" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
            </NavDropdown>
            <img src={user} alt='' width="40px" height="40px" style={{ borderRadius: "70%" }} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
