const { connect } = require("mongoose");

async function xyz() {
  const request = await fetch("http://localhost:3000/skill-search", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      searchItem: "python",
    },
  });

  const r = await request.json();
  console.log(r);
}
async function abc() {
  const request = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username: "pulkitkakar789", password: "1234" }),
  });

  const r = await request.json();
  console.log(r);
}
async function abcd() {
  const request = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: "pulkit",
      password: "1234",
      firstName: "pulkit",
      lastName: "Kakar",
      email: "pulttt67",
    }),
  });

  const r = await request.json();
  console.log(r);
}
async function abcde() {
  const request = await fetch("http://localhost:3000/create-skill", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      skillName: "python",
      skillHeadLine: "Learn Pythion",
      numberOfStudents: 5,
      objectives: ["ooooooo1", "ooooo2"],
      requirements: ["r1", "r2"],
      description: "fffffffffff",
      rating: 3,
      courseImageLink: "fffff",
      tags: ["kk", "ddd"],
    }),
  });

  const r = await request.json();
  console.log(r);
}
async function markFavorite() {
  const request = await fetch("http://localhost:3000/mark-favorite/akshit", {
    method: "PUT",
    headers: {
      authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InB1bGtpdCIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTY5NTUwMzc2NywiZXhwIjoxNjk1NTA3MzY3fQ._d5ijcLhaK-6d3-pa7VcGrXvzypyKUph5QJYBtJaN1g",
    },
  });

  const x = await request.json();
  console.log(x);
}
async function sendRequest() {
  const request = await fetch("http://localhost:3000/connect/akshit", {
    method: "PUT",
    headers: {
      authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InB1bGtpdCIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTY5NTUwMzc2NywiZXhwIjoxNjk1NTA3MzY3fQ._d5ijcLhaK-6d3-pa7VcGrXvzypyKUph5QJYBtJaN1g",
    },
  });

  const x = await request.json();
  console.log(x);
}
async function acceptReq() {
  const request = await fetch("http://localhost:3000/accept-request/pulkit", {
    method: "PUT",
    headers: {
      authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrc2hpdCIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTY5NTUwNDcyMCwiZXhwIjoxNjk1NTA4MzIwfQ.twQmHyGlshum30csPF3PaRcyfECH18OgyfFuKEE_k54",
    },
  });

  const x = await request.json();
  console.log(x);
}
async function login() {
  const request = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username: "akshit", password: "1234" }),
  });

  const x = await request.json();
  console.log(x);
}
async function updateUser() {
  const request = await fetch("http://localhost:3000/update-user", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrc2hpdCIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTY5NTUwNDcyMCwiZXhwIjoxNjk1NTA4MzIwfQ.twQmHyGlshum30csPF3PaRcyfECH18OgyfFuKEE_k54",
    },
    body: JSON.stringify({ username: "akshit7774", password: "1234", firstName:"akshit",lastName:"kakar",email:"pulttt6" }),
  });

  console.log(request.status);
  const x = await request.json();
  console.log(x);
}
async function aaa(){
    const r=await fetch('http://localhost:3000/allUsers')
}
// markFavorite();
// abcd();
// acceptReq();
// updateUser();
// xyz();