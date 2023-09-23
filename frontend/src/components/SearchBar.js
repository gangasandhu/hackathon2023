import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

function SearchBarComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Form>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default SearchBarComponent;
