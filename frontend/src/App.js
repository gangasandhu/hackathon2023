import './App.css';
import { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Profile from './components/Profile';
import { Container } from 'react-bootstrap';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AccountPage from './components/AccountPage';
// import SearchBarComponent from './components/SearchBarComponent';

function App() {

  const user = {
    username: "ganga",
    firstName: "Ganga",
    lastName: "Singh",
    email: "gangasingh@gmail.com",
    skills: [{
      skillName: "React",
      description: "lskdjf slkjf s;lkfdjs;k fjs;kldfjs;lkdfj sl;dkf jsdlkf",
    },
    {
      skillName: "Nodejs",
      description: "lskdjf slkjf s;lkfdjs;k fjs;kldfjs;lkdfj sl;dkf jsdlkf",
    },
    {
      skillName: "MongoDB",
      description: "lskdjf slkjf s;lkfdjs;k fjs;kldfjs;lkdfj sl;dkf jsdlkf",
    }],
    connectedUsers: []
  }

  return (
    <div>
      <NavbarComponent />
      <Container>
        {/* <SearchBarComponent onSearch={handleSearch}/> */}
        {/* <LoginPage />*/}
        <SignUpPage />
        {/* <Profile user={user} /> */}
        {/* <AccountPage /> */}
      </Container>
    </div>
  );
}

export default App;
