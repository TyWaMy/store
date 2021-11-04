import React from "react";
import { Link } from "react-router-dom";

const ItemRefrigerators = (props) => {
  const onClick = () => {};

  return (
    <Link to={`/refrigerator/${props.id}`}>
      <div className="wrapper" onClick={onClick}>
        <img className="image_main" src={props.image_main}></img>
        <div className="title">{props.title}</div>
        <div className="old_price">{props.old_price}</div>
        <div className="price">{props.price}</div>
      </div>
    </Link>
  );
};

export default ItemRefrigerators;
