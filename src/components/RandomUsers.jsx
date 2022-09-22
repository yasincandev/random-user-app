import React from "react";

import "../styles/RandomUsers.css";

const RandomUsers = ({ userData, getUser, handleSelectUser, user }) => {
  return (
    <>
      <div className="random__user__btn">
        <button onClick={getUser} className="btn">
          Get Me Random Users
        </button>
      </div>
      <div className="random__user__container">
        {userData.map((user, index) => {
          return (
            <div
              className="random__user__card"
              onClick={() => handleSelectUser(user)}
              key={index}
            >
              <div className="user__card__img">
                <img src={user.picture.large} alt="" />
              </div>
              <div className="user__card__information">
                <div className="user__card__information__name">
                  <h2>
                    {user.name.title}. {user.name.first} {user.name.last}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RandomUsers;
