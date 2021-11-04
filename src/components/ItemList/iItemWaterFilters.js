import React from "react";
import { Link } from "react-router-dom";

const ItemWaterFiltres = (props) => {
  const onClick = () => {};

  return (
    <Link to={`/WaterFilter/${props.id}`}>
      <div className="wrapper_water_filters" onClick={onClick}>
        <img className="image_main" src={props.image_main}></img>
        <div className="title">{props.title}</div>
        <div className="old_price">{props.old_price}</div>
        <div className="price">{props.price}</div>
      </div>
    </Link>
  );
};

export default ItemWaterFiltres;
