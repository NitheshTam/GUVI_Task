import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Signup(props) {
  const history = useHistory();
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/signup', signupData);

      alert('Sign Up Successfull');
      history.push('/login');

    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={signupData.name} onChange={e => setSignupData({ ...signupData, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={signupData.email} onChange={e => setSignupData({ ...signupData, email: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={signupData.password} onChange={e => setSignupData({ ...signupData, password: e.target.value })} />
        </Form.Group>
        <Button onClick={handleSignup} variant="success" className="mb-3">
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
