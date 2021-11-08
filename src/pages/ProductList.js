import React from "react";
import Item from "../components/ItemList/Item";
import s from "./ProductList.module.css";
import { notebookList } from "../Massive/notebookList";
import { filters } from "../Massive/waterFilters";
import { bicycles } from "../Massive/bicycles";
import { cameras } from "../Massive/cameras";
import { refrigerators } from "../Massive/refrigerators";
import { useLocation } from "react-router-dom";
import { pens } from "../Massive/pens";
import { sneakers } from "../Massive/sneakers";

const products = {
  notebooks: notebookList,
  refrigerators: refrigerators,
  waterFilters: filters,
  bicycles: bicycles,
  cameras: cameras,
  sneakers: sneakers,
  pens: pens,
};

const ProductList = () => {
  const location = useLocation();

  const pathname = location.pathname.slice(1);

  return (
    <div className={s.list}>
      {products[pathname].map((e) => {
        return <Item {...e} name={pathname.substring(0, pathname.length - 1)} />;
      })}
    </div>
  );
};

export default ProductList;
