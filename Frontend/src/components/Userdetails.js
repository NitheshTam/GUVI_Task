// UserDetails.js
import React from "react";

function UserDetails(props) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {props.userData?.name}</p>
      <p>Email: {props.userData?.email}</p>
      <p>Age: {props.userData?.age}</p>
      <p>Gender: {props.userData?.gender}</p>
      <p>Date of Birth: {props.userData?.dob}</p>
      <p>Mobile: {props.userData?.mobile}</p>
    </div>
  );
}

export default UserDetails;
