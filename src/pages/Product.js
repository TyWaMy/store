import React from "react";
import { useParams } from "react-router-dom";
import { notebookList } from "../Massive/notebookList";
import { refrigerators } from "../Massive/refrigerators";
import s from "./PageNotebook.module.css";
import { useLocation } from "react-router-dom";
import { filters } from "../Massive/waterFilters";
import { bicycles } from  "../Massive/bicycles"
import { cameras } from "../Massive/cameras";

const products = {
  notebook: notebookList,
  refrigerator: refrigerators,
  waterFilter: filters,
  bicycle: bicycles,
  camera: cameras,
};

const Product = () => {
  const { id } = useParams();
  const location = useLocation();

  const pathname = location.pathname.split("/")[1];

  const product = products[pathname].find((e) => e.id == id);

  return (
    <div className={s.Sel}>
      <img className={s.image_main} src={product.image_main}></img>
      <div className={s.title}>{product.title}</div>
      <div className={s.old_price}>{product.old_price}</div>
      <div className={s.price}>{product.price}</div>
    </div>
  );
};

export default Product;
