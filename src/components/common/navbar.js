import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Image
} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CommonNavbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie, removeCookie] = useCookies(['login', 'username']);
  const user = useSelector((state) => state.auth.user);
  const [dateState, setDateState] = useState(new Date());

  // Créer une horloge dynamique
  useEffect(() => {
    const dateTime = setInterval(() => setDateState(new Date()), 1000);
    // Eviter les erreurs avec l'heure lors de changement de page
    return () => clearInterval(dateTime);
  }, []);

  const time = `${(dateState.getHours() < 10 ? '0' : '') + dateState.getHours()}:${(dateState.getMinutes() < 10 ? '0' : '') + dateState.getMinutes()}:${(dateState.getSeconds() < 10 ? '0' : '') + dateState.getSeconds()}`;
  function logout() {
    // On retire les cookies afin d'établir la déconnexion
    removeCookie('login');
    removeCookie('username');
  }
  return (<><Navbar bg="dark" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to="/">People-stats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/connexion" onClick={ logout }>Se déconnecter</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Navbar.Text>
              <Image src={user.picture.thumbnail} roundedCircle/>
            </Navbar.Text>
            <Navbar.Text>
               {user.name.first}  {user.name.last} {time}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar></>);
};

export default CommonNavbar;
