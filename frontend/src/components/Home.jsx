import { useRecoilValue, useSetRecoilState } from "recoil";
import searchResults from "../atoms/searchResults";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const users = useRecoilValue(searchResults);
  console.log("users=" + users);
  console.log(users);
  const navigate = useNavigate();

  function toggleFavorite(user) {
    console.log("favorite changed");
  }
  return (
    <>
      {users.map((user) => {
        return user.skills.map((skill) => (
          <Card
            style={{ width: "50%", margin: "2rem auto" }}
            onClick={() => navigate(`/${user.username}`)}
          >
            <Card.Body>
              <Card.Title>{skill.name}</Card.Title>
              <Card.Text className="text-decoration-underline">
                @{user.username}
              </Card.Text>
              <Card.Text>
                {user.firstname} {user.lastname}
              </Card.Text>
              <Card.Img
                variant="top"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                }
                style={{ height: "10em" }}
              />
            </Card.Body>
            <Card.Body>
              {/* <Button value={user.favorite} onClick={()=>toggleFavorite(user)}>{user.favorite?'🤍':'❤️'}</Button> */}
            </Card.Body>
          </Card>
        ));
      })}
    </>
  );
}

export default Home;
