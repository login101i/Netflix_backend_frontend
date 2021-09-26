import React, { useState, useEffect, useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/newProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";

import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/newList";

import "./style.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

export default function App() {
  const { user } = useContext(AuthContext);
  // const user=true

  // const [user, setUser] = useState(false);

  // const userCrendentail = {
  //   email: "mk55@wp.pl",
  //   password: "123456",
  // };

  // useEffect(() => {
  //   const loginUser = async () => {
  //     try {
  //       const res = await axios.post(`login`, userCrendentail);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   loginUser();
  // }, []);

  const accessToken = user.accessToken;
  // console.log(accessToken)
  // const accessToken='111112'

  console.log(user);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          <Login />
        </Route>

        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route exact path="/">
                <Home accessToken={accessToken} />
              </Route>

              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movieList">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>

              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newList">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}
