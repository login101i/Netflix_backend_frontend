import React, { useEffect, useState } from "react";

import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// const user = true

function App() {
  const [user, setUser] = useState({});
  console.log(user);

  const userCrendentail = {
    email: "mk55@wp.pl",
    password: "123456",
  };

  useEffect(() => {
    const loginUser = async () => {
      try {
        const res = await axios.post(`login`, userCrendentail);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    loginUser();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home user={user}/> : <Register />}
          </Route>

          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            <Register />
          </Route>

          {user && (
            <>
              <Route path="/movies">
                <Home type={"movie"} />
              </Route>
              <Route path="/series">
                <Home type={"series"} />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
