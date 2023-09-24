import "./App.css";
import { useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
// import Profile from "./components/Profile";
// import { Container } from "react-bootstrap";
// import LoginPage from "./components/LoginPage";
// import SignUpPage from "./components/SignUpPage";
// import AccountPage from "./components/AccountPage";
import SearchBarComponent from "./components/SearchBarComponent";
import Content from "./components/Content";
import searchResults from "./atoms/searchResults";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
// import SearchBarComponent from './components/SearchBarComponent';

const url = "http://localhost:3000";

function App() {
  const [users,setUsers] = useRecoilState(searchResults);
  // const setUsers = useSetRecoilState(searchResults)
  const navigate = useNavigate();
  useEffect(() => {
    async function callback () {
      const request = await fetch(url + "/all-users", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }).then(response => response.json());
      console.log("reqqqqq");
      console.log(request);
      setUsers(request);
    }
    callback();
  }, []);


  const handleSearch = async (query) => {
    // setUsers([])
    // Here, you can implement the logic to perform a search
    // For simplicity, let's assume we're just updating state with some mock results
    const mockResults = [
      {
        _id: 1,
        username: "Result 1",
        favorite: true,
        firstname: "result",
        lastname: "1",
        skills: [
          {
            name: "Python",
            imageLink:
              "https://codeop.tech/wp-content/uploads/2021/11/artturi-jalli-g5_rxRjvKmg-unsplash-scaled.jpg",
          },
        ],
      },
      {
        _id: 2,
        username: "Result 2",
        favorite: true,
        firstname: "result",
        lastname: "2",
        skills: [
          {
            name: "Java",
            imageLink:
              "https://codeop.tech/wp-content/uploads/2021/11/artturi-jalli-g5_rxRjvKmg-unsplash-scaled.jpg",
          },
        ],
      },
    ];
    const request = await fetch("http://localhost:3000/skill-search", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        searchItem: query,
      },
    });

    const rrr = await request.json();
    // console.log("r="+rrr.body)
    // // if(typeof r !== typeof []){
    // //   setUsers([])
    // // }
    setUsers(rrr);
    // if (query) {
    //   console.log("searching user");
    //   setUsers([mockResults[0]]);
    // } else {
    //   navigate("/");
    //   setUsers(mockResults);
    // }
  };
  return (
    <div>
      <NavbarComponent />
      <SearchBarComponent onSearch={handleSearch} />
      <Content users={users} />
      {/* <SearchBarComponent onSearch={handleSearch}/> */}
      {/* <LoginPage />*/}
      {/* <Profile user={user} /> */}
      {/* <AccountPage /> */}
    </div>
  );
}

export default App;
