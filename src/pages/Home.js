import React from "react";
import Funk from "../components/FunK";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.notebook}>
      <h1>Home</h1>
      <div className={s.content}>
        <Funk />
      </div>
    </div>
  );
};

export default Home;
