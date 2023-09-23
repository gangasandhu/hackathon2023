import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Home from './Home'
import Profile from './Profile'
import searchResults from "../atoms/searchResults";

function Content() {
  const users = useRecoilValue(searchResults)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {users.map(user=> (
          <Route path={`/${user.username}`} element={<Profile user={user}/>}/>
        )
          )}
          {/* <Route path="/login" element={<LoginPage/>} /> */}
      </Routes>
    </div>
  )
}

export default Content