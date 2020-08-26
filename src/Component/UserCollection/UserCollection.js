import React from "react";
import "./UserCollection.css";

const UserCollection = (props) => {
  const friend = props.friends;
  const totalSalary = friend.reduce(
    (total, friend) => total + friend.salary,
    0
  );
  return (
    <div>
      <h3>Friends Added: {props.friends.length}</h3>
      <h3>Total salary of friends: ${totalSalary}</h3>
    </div>
  );
};

export default UserCollection;
