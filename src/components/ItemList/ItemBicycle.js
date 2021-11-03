import React from "react";
import { Link } from "react-router-dom";

const ItemBicycle = (props) => {
  const onClick = () => {};

  return (
    <Link to={`/Bicycle/${props.id}`}>
      <div className="wrapper_bicycle" onClick={onClick}>
        <img className="image_main" src={props.image_main}></img>
        <div className="title">{props.title}</div>
        <div className="old_price">{props.old_price}</div>
        <div className="price">{props.price}</div>
      </div>
    </Link>
  );
};

export default ItemBicycle;
