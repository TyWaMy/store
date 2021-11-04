import React from "react";
import { useParams } from "react-router-dom";
import { refrigerators } from "../Massive/refrigerators";
import s from "./PageRefrigerators.module.css";

const PageRefrigerator = () => {
  const { id } = useParams();

  const refrigerator = refrigerators.find((e) => e.id == id);

  return (
    <div className={s.Sel}>
      <img className={s.image_main} src={refrigerator.image_main}></img>
      <div className={s.title}>{refrigerator.title}</div>
      <div className={s.old_price}>{refrigerator.old_price}</div>
      <div className={s.price}>{refrigerator.price}</div>
    </div>
  );
};

export default PageRefrigerator;
