import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';


function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const url = 'https://localhost:3000/login'

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, formData);

      console.log('Login Successful:', response.data);

    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username or Email</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username or email"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
