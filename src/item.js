import React from "react";

const Item = (props) => {
  return (
    <div className="wrapper">
      <img className="image_main" src={props.image_main}></img>
      <div className="title">{props.title}</div>
      <div className="old_price">{props.old_price}</div>
      <div className="price">{props.price}</div>
    </div>
  );
};

export default Item;
