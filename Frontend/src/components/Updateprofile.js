// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import axios from "axios";

// function UpdateProfile(props) {
//   const [profileData, setProfileData] = useState({
//     age: props.user ? props.user.age : '',
//     gender: props.user ? props.user.gender : '',
//     dob: props.user ? props.user.dob : '',
//     mobile: props.user ? props.user.mobile : ''
//   });

  
//   const handleUpdateProfile = async () => {
//     try {
//       await axios.post('http://localhost:5000/update-profile', profileData, { withCredentials: true });
//       const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });
//       props.setUser(response.data);
//       alert('Successfully Updated');
//     } catch (error) {
//       console.error('Profile update error:', error);
//     }
//   };
  

//   return (
//     <div>
//       {props.user ? (
//         <div>
//           {/* Render form fields for updating profile data */}
//           <label>Age: <input type="text" value={profileData.age} onChange={(e) => setProfileData({ ...profileData, age: e.target.value })} /></label>
//           <label>Gender: <input type="text" value={profileData.gender} onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })} /></label>
//           <label>DOB: <input type="text" value={profileData.dob} onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })} /></label>
//           <label>Mobile: <input type="text" value={profileData.mobile} onChange={(e) => setProfileData({ ...profileData, mobile: e.target.value })} /></label>
          
//           {/* Add a button to trigger the profile update */}
//           <Button onClick={handleUpdateProfile} variant="success" type='submit'>
//             Update Profile
//           </Button>
//         </div>
//       ) : (
//         <p>User information not available.</p>
//       )}
//     </div>
//   );
// }

// export default UpdateProfile;
