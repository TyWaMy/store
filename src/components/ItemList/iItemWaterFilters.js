import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ItemWaterFiltres = (props) => {
  return (
    <Link to={`/waterFilter/${props.id}`}>
      <div className="wrapper">
        <img className="image_main" src={props.image_main}></img>
        <div className="title">{props.title}</div>
        <div className="old_price">{props.old_price}</div>
        <div className="price">{props.price}</div>
      </div>
    </Link>
  );
};

export default ItemWaterFiltres;
