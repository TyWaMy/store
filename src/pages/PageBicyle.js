import React from "react";
import { useParams } from "react-router-dom";
import { bicycles } from "../Massive/bicycles";
import s from "./PageBicycle.module.css";

const PageBicycle = () => {
  const { id } = useParams();

  const bicycle = bicycles.find((e) => e.id == id);

  return (
    <div className={s.Sel}>
      <img className={s.image_main} src={bicycle.image_main}></img>
      <div className={s.title}>{bicycle.title}</div>
      <div className={s.old_price}>{bicycle.old_price}</div>
      <div className={s.price}>{bicycle.price}</div>
    </div>
  );
};

export default PageBicycle;
