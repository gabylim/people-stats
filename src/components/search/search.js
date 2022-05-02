import React from 'react';
import { Container } from 'react-bootstrap';
import SearchFilter from './search-filter';
import SearchResult from './search-result';
import './index.scss';

const Search = () => (
    <Container fluid="md">
        <SearchFilter />
        <SearchResult itemsPerPage={8} />
    </Container>);

export default Search;
