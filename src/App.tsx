import { useState } from "react";
import IgFollowCard from "./igFollowCard";
import UnFollowCard from "./unFollowCard";

function App() {
  const [followersList, setFollowersList] = useState([
    {
      username: "franco_baldasarri",
      name: "Franco Baldassarri",
      isFollowing: false,
    },
    {
      username: "user2",
      name: "User 2",
      isFollowing: false,
    },
    {
      username: "user3",
      name: "Usee 3",
      isFollowing: false,
    },
  ]);

  const [userSelected, setUserSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleCLick = (userSelected: any) => {
    const updatedFollowersList = followersList.map((user) =>
      user.username === userSelected.username
        ? { ...user, isFollowing: !user.isFollowing }
        : user
    );
    setFollowersList(updatedFollowersList);
    if (userSelected.isFollowing) {
      setShowModal(true);
      setUserSelected(userSelected);
    }
  };

  return (
    <div className="main-body">
      <div className="followers-body">
        {followersList.map((user, index) => {
          return (
            <IgFollowCard
              key={index}
              userName={user.username}
              name={user.name}
              isFollowing={user.isFollowing}
              handleCLick={() => handleCLick(user)}
            />
          );
        })}
        {showModal ? (
          <UnFollowCard
            setShowModal={setShowModal}
            userSelected={userSelected}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
