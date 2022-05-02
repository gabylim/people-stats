import React from 'react';
import {
  Container, Navbar, Nav, NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (<><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Accueil</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#link">{this.state.date.toLocaleTimeString()}</Nav.Link>
          <Nav.Link as={Link} to="/search">Recherche</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></>);
  }
}

export default Clock;
