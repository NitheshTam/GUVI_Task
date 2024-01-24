import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Login(props) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/login', loginData, { withCredentials: true });
      const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });
      setUser(response.data);
  
      alert('Logged in successfully');
      history.push('/profile');
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={loginData.email} onChange={e => setLoginData({ ...loginData, email: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={loginData.password} onChange={e => setLoginData({ ...loginData, password: e.target.value })} />
        </Form.Group>
        <Button onClick={handleLogin} variant="primary" className="mb-3">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
