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
      <h4>Friends Added: {props.friends.length}</h4>
      <h4>Total salary of friends: ${totalSalary}</h4>
    </div>
  );
};

export default UserCollection;
