import React from 'react';
import {
  Card, Col, Container, Form, Image, Row, Table
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserMap from '../maps/user-map';

const User = () => {
  const userResult = useSelector((state) => state.search.userResult);

  return (
      <Container>
          <Row className='mt-5'>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <div className=''>
                                    <Image src={userResult.picture.large} roundedCircle></Image>
                                </div>
                            </Form.Group>
                        <Form.Group className="mb-3">
                            <Table >
                                    <tbody>
                                        <tr>
                                            <th className='bg-dark text-light' scope='row'>Gender</th>
                                            <td>{userResult.gender}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>First name</th>
                                            <td>{userResult.name.first}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Last name</th>
                                            <td>{userResult.name.last}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Email</th>
                                            <td>{userResult.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Phone</th>
                                            <td>{userResult.phone}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Cell</th>
                                            <td>{userResult.cell}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Registered date</th>
                                            <td>{userResult.registered.date}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Registered age</th>
                                            <td>{userResult.registered.age}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Date of birth</th>
                                            <td>{userResult.dob.date}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row' className='bg-dark text-light'>Age</th>
                                            <td>{userResult.dob.age}</td>
                                        </tr>
                                    </tbody>
                            </Table>
                        </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
          </Row>
          <Row className='mt-3'>
            <Col md={12}>
                <Card>
                    <Card.Header className='text-center'>Maps</Card.Header>
                    <Card.Body>
                        <UserMap user={userResult} />
                    </Card.Body>
                </Card>
            </Col>
          </Row>
      </Container>
  );
};

export default User;
