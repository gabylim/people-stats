import React, { useEffect, useState } from 'react';
import {
  Card, Col, Container, Row, Button, ListGroup
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Items = ({ currentItems }) => (<>

{currentItems
        && currentItems.map((item) => (
          <Col key={item.login.username} sm={3} className="mt-3">
          <Card>
            <Card.Img variant="top" src={item.picture.large} />
            <Card.Body>
              <Card.Title className='text-center'>{item.name.title} {item.name.first} {item.name.last}</Card.Title>
            </Card.Body>
            <ListGroup>
                  <ListGroup.Item><b>Gender :</b> {item.gender}</ListGroup.Item>
                  <ListGroup.Item><b>Email :</b> {item.email}</ListGroup.Item>
                  <ListGroup.Item><b>Phone :</b>{item.phone}</ListGroup.Item>
                  <ListGroup.Item><b>Cell : </b>{item.cell}</ListGroup.Item>
            </ListGroup>
            <Card.Footer className="d-grid gap-2">
              <Button className='cardsButton'>
                <Link to={`/user/${item.login.username}`}>Show</Link>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        ))}
      </>
);
const SearchResult = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.search.users);
  const filter = useSelector((state) => state.search.filter);
  const initialPage = useSelector((state) => state.search.initialPage);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const itemOffset = useSelector((state) => state.search.itemOffSet);
  // By default : gender: 'Genre', city: '', state: '', nameFirst: '', nameLast: ''
  let userFilter = users;
  if (filter.gender !== 'Genre') {
    userFilter = users.filter((v) => v.gender === filter.gender);
  }

  if (filter.city !== '') {
    userFilter = users.filter((v) => v.location.city === filter.city);
  }

  if (filter.state !== '') {
    userFilter = users.filter((v) => v.location.state === filter.state);
  }

  if (filter.nameFirst !== '') {
    userFilter = users.filter((v) => v.name.first === filter.nameFirst);
  }

  if (filter.nameLast !== '') {
    userFilter = users.filter((v) => v.name.last === filter.nameLast);
  }

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // On met ici à jour la liste des utilisateurs à afficher à l'écran
    setCurrentItems(userFilter.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userFilter.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filter, initialPage, userFilter]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userFilter.length;
    // On met ici à jour l'échelle de données minimum
    dispatch({
      type: 'itemOffSet/update',
      itemOffSet: newOffset
    });
    // On met à jour ici la page courante
    dispatch({
      type: 'initialPage/update',
      initialPage: event.selected
    });
  };

  return (
    <Container fluid>
    <Row>
    <Col md={4}></Col>
      <Col md={6} className='mt-4'>
        <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageClick}
            forcePage={initialPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
        <Col md={2}></Col>
    </Row>
    <Row>
      {/* {userFilter.map((item) => <Item key={item.login.username} item={item} />)} */}
      <Items currentItems={currentItems} />
    </Row>
    <Row>
    <Col md={4}></Col>
      <Col md={6} className='mt-4'>
        <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageClick}
            forcePage={initialPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
        <Col md={2}></Col>
    </Row>
  </Container>
  );
};

export default SearchResult;
