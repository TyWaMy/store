import React from "react";
import { useParams } from "react-router-dom";
import { filters } from "../Massive/waterFilters";
import s from "./PageWaterFilters.module.css";

const PageWaterFilter = () => {
  const { id } = useParams();

  const waterFilter = filters.find((e) => e.id == id);
 

  return (
    <div className={s.Sel}>
      <img className={s.image_main} src={waterFilter.image_main}></img>
      <div className={s.title}>{waterFilter.title}</div>
      <div className={s.old_price}>{waterFilter.old_price}</div>
      <div className={s.price}>{waterFilter.price}</div>
    </div>
  );
};

export default PageWaterFilter;
