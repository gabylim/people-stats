import React from 'react';
import {
  Card, Col, Container, Row
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HomeMap from '../maps/home-map';
import Gender from '../stats/gender';
import Country from '../stats/country';

const Accueil = () => {
  const usersMaps = useSelector((state) => state.stats.usersMaps);
  return (<Container className='mt-3' fluid>
      <Row>

        <Col md={12}>
          <Card>
            <Card.Header className='text-center  '>Gender</Card.Header>
            <Card.Body>
              <Gender></Gender>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
            <Card>
              <Card.Header className='text-center bg-dark text-light'>Country</Card.Header>
              <Card.Body>
                <Country></Country>
              </Card.Body>
            </Card>
        </Col>

      </Row>
      <Row className='mt-3'>

        <Col md={12}>
            <Card>
              <Card.Header className='text-center  bg-dark text-light'>Maps</Card.Header>
              <Card.Body>
                  <HomeMap users={usersMaps}/>
              </Card.Body>
            </Card>
        </Col>

      </Row>
  </Container>);
};

export default Accueil;
