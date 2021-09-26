import React, { useState, useEffect, useMemo } from "react";
import "./home.css";

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";

export default function Home({accessToken}) {
  const MONTHS = useMemo(() => ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"], []);

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [user, setUser] = useState({});
  const [userStats, setUserStats] = useState([]);

 


  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("admin/userStats", {
          headers: {
            tokenes: accessToken,
          },
        });
        console.log(res.data)
        const statsList = res.data.sort(function (a, b ) {
          return a._id - b._id;
         
        });
      
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Nowi użytkownicy": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats()
  }, [MONTHS]);


  console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Nowi użytkownicy" />

      <div className="homeWidgets">
        <WidgetSm accessToken ={accessToken}/>
      <WidgetLg accessToken={accessToken}/>
      </div>
    </div>
  );
}


