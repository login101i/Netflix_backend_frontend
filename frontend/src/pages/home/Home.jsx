import React from "react";
import { useState, useEffect } from "react";

import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({ type, user }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const accessToken=user.accessToken

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(`getlist${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            tokenes: accessToken,
          },
        });
        console.log(res.data);
        setLists(res.data);
       
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [genre, type]);


  return (
    <div className="home">
      <Navbar />

      <Featured type={type} accessToken={accessToken} />
      {lists.map((list, index) => (
        <List list={list} index={index} key={index} accessToken={accessToken} />
      ))}
      <div>Hello from HOmeee</div>
    </div>
  );
};

export default Home;
