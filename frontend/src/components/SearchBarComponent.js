import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import searchResults from '../atoms/searchResults';
import {useRecoilState} from 'recoil';

function SearchBarComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value)
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };


  return (
    <>
    <Form style={{width:'80%', margin:'auto'}}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
          <Button variant="outline-secondary" onClick={handleSearch}>
            Search
          </Button>
      </InputGroup>
    </Form>
    </>
    // <h1>hello world</h1>
  );
}

export default SearchBarComponent;
