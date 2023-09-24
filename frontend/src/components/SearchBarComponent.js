import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBarComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <Form style={{ width: "80%", margin: "auto" }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search skills to get Users with thoses skills"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Button variant="outline-secondary" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Form>
    </>
  );
}

export default SearchBarComponent;
