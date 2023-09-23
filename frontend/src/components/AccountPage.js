import React, { useState, useEffect, useParams } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AccountPage({ user }) {
  const {username} = useParams()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    connectedUsers: {},
    skills: {},
  });

const url = "https://localhost:3000"


  useEffect(() => {
    // Fetch user account data when the component mounts
    async function fetchUserAccount() {
      try {
        // Make a GET request to fetch user account data
        const response = await axios.get(url + "/userData/:");

        // Set the form data with the retrieved user data
        setFormData({
          username: response.data.username,
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          connectedUsers: response.data.connectedUsers,
          skills: response.data.skills,
        });

      } catch (error) {
        console.error('Error fetching user account:', error);
      }
    }

    fetchUserAccount();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement your update account logic here, e.g., make an API request
    try {
      const response = await axios.put(url, formData);

      console.log('Account update successful:', response.data);
    } catch (error) {
      console.error('Account update error:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">My Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formConnectedUsers">
          <Form.Label>Connected Users (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            name="connectedUsers"
            value={formData.connectedUsers}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formSkills">
          <Form.Label>Skills (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Account
        </Button>
      </Form>
    </Container>
  );
}

export default AccountPage;
