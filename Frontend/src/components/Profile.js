// Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import UserDetails from "./Userdetails";

function Profile(props) {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    dob: "",
    mobile: "",
  });

  useEffect(() => {
    // Fetch user details from the server after login
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/profile", {
          withCredentials: true,
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      // Send the update request
      await axios.post(
        "http://localhost:5000/update-profile",
        {
          age: userData.age,
          gender: userData.gender,
          dob: userData.dob,
          mobile: userData.mobile,
        },
        { withCredentials: true }
      );
  
      // Fetch the updated user details
      const response = await axios.get("http://localhost:5000/profile", {
        withCredentials: true,
      });
  
      // Update the local state by merging the new data with the existing state
      setUserData((prevUserData) => ({
        ...prevUserData,
        ...response.data,
      }));
  
      alert('Profile updated successfully');
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/logout", { withCredentials: true });
      alert('Logged out successfully');
      history.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={userData.email} readOnly />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={userData.age}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            name="gender"
            value={userData.gender}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="text"
            name="dob"
            value={userData.dob}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={userData.mobile}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button onClick={handleProfileUpdate} variant="primary" className="mb-3">
          Update Profile
        </Button>

        {/* Logout button */}
        <Button onClick={handleLogout} variant="danger" className="mb-3">
          Logout
        </Button>

        {/* Render UserDetails and pass userData prop */}
        <UserDetails userData={userData} />
      </Form>
    </div>
  );
}

export default Profile;
