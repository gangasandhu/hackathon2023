import './App.css';
import { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Profile from './components/Profile';
import { Container } from 'react-bootstrap';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AccountPage from './components/AccountPage';
import SearchBarComponent from './components/SearchBarComponent';
import Content from './components/Content'
import searchResults from './atoms/searchResults';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
// import SearchBarComponent from './components/SearchBarComponent';


function App() {
  const [users, setUsers] = useRecoilState(searchResults);
  const navigate = useNavigate()


  const handleSearch = (query) => {
    // Here, you can implement the logic to perform a search
    // For simplicity, let's assume we're just updating state with some mock results
    const mockResults = [
      { _id: 1, username: 'Result 1',favorite:true, firstname:'result', lastname:'1',skills:[{name:'Python',imageLink:'https://codeop.tech/wp-content/uploads/2021/11/artturi-jalli-g5_rxRjvKmg-unsplash-scaled.jpg'}]},
      { _id: 2, username: 'Result 2',favorite:true, firstname:'result', lastname:'2',skills:[{name:'Java',imageLink:'https://codeop.tech/wp-content/uploads/2021/11/artturi-jalli-g5_rxRjvKmg-unsplash-scaled.jpg'}]}
    ]

    if (query) {
      console.log("searching user")
      setUsers([mockResults[0]])
    }
    else {
      navigate('/')
      setUsers(mockResults)
    }
  };
  return (
    <div>
        <NavbarComponent />
        <SearchBarComponent onSearch={handleSearch} />
        <Content />
        {/* <SearchBarComponent onSearch={handleSearch}/> */}
        {/* <LoginPage />*/}
        {/* <Profile user={user} /> */}
        {/* <AccountPage /> */}
    </div>
  );
}

export default App;
