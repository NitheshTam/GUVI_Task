
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import UserDetails from './components/Userdetails';


const App = (props) => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  
  

  return (
    <Router>
          <Switch>
            <Route exact path="/"><Signup/></Route>
            <Route path = "/login"><Login/></Route>
            <Route path="/profile">
              <Profile user={user} setUser={setUser} handleLogout={props.handleLogout} />
            </Route>
            <Route path="/userdetails">
          {/* Render UserDetails component with user data */}
          <UserDetails />
        </Route>
          </Switch>   
        </Router>
  );
};

export default App;
