import React from "react";
import "./UserInfo.css";
import Button from "react-bootstrap/Button";

const UserInfo = (props) => {
  const { id, img, name, email, phone, salary } = props.user;

  const handleAddFriend = props.handleAddFriend;

  return (
    <div className="userInfo-container">
      <div className="userInfo-img">
        <img src={img} alt="" />
      </div>
      <div key={id} className="ml-5">
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Address: {props.user.address.city}</h3>
        <h3>Phone: {phone}</h3>
        <h3>Salary: ${salary}</h3>
        <Button variant="primary" onClick={() => handleAddFriend(props.user)}>
          + Add Friend
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
