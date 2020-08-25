import React from "react";
import "./UserInfo.css";
// import UserCollection from "../UserCollection/UserCollection";

const UserInfo = (props) => {
  const { id, img, name, email, phone, salary } = props.user;

  const handleAddFriend = props.handleAddFriend;

  return (
    <div className="userInfo-container">
      <h1>People You May Know</h1>
      <div key={id} className="userInfo">
        <div>
          <img src={img} alt="" />
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <h3>Address: {props.user.address.city}</h3>
          <h3>Phone: {phone}</h3>
          <h3>Salary: ${salary}</h3>
          <button onClick={() => handleAddFriend(props.user)}>
            + Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
