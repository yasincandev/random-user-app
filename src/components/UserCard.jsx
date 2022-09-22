import React from "react";
import "../styles/UserCard.css";
import dayjs from "dayjs";
import {
  HiCake,
  HiDeviceMobile,
  HiMail,
  HiLocationMarker,
} from "react-icons/hi";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__main">
        <img src={user.picture.large} alt="" />
        <div className="user-card__information__name">
          <h2>
            {user.name.title}. {user.name.first} {user.name.last}
          </h2>
          <span>@{user.login.username}</span>
        </div>
      </div>
      <div className="user-card__information">
        <div className="user-card__information__details">
          <HiCake size={30} />
          <span>
            {dayjs(user.dob.date).format("DD MMMM YYYY")}, {user.dob.age}
          </span>
        </div>
        <div className="user-card__information__details">
          <HiMail size={30} />
          <span> {user.email}</span>
        </div>
        <div className="user-card__information__details">
          <HiDeviceMobile size={30} />
          <span> {user.cell}</span>
        </div>
        <div className="user-card__information__details">
          <HiLocationMarker size={30} />
          <span>
            {" "}
            {user.location.city} , {user.location.country}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
