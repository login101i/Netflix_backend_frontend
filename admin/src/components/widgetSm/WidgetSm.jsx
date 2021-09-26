import { useState, useEffect } from "react";

import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm({ accessToken }) {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("admin/users?new=true", {
          headers: {
            tokenes: accessToken,
          },
        });
        setNewUsers(res.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
    console.log(newUsers);
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
     
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img src={user.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_vN1MepBjnzPT_tIDN74eJql5dnLAW0KWLuMOQasi342yUQ4loS5m8EHDJDrHKISJR0&usqp=CAU"} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
