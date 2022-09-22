import axios from "axios";
import { useState } from "react";

import RandomUsers from "./components/RandomUsers";
import UserCard from "./components/UserCard";

function App() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUser = async () => {
    setUserData([]);
    setSelectedUser(null);
    axios
      .get("https://randomuser.me/api/?results=8")
      .then((res) => {
        setUserData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <RandomUsers
        handleSelectUser={handleSelectUser}
        userData={userData}
        getUser={getUser}
        user={selectedUser}
      />
      {selectedUser && <UserCard user={selectedUser} />}
    </div>
  );
}

export default App;
