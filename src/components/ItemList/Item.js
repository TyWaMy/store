import React from "react";
import { Link } from "react-router-dom";
import s from "./Item.module.css"

const Item = (props) => {
  return (
    <Link to={`/${props.name}/${props.id}`}>
      <div className={s.wrapper}>
        <img className={s.image_main} src={props.image_main}></img>
        <div className={s.title}>{props.title}</div>
        <div className={s.old_price}>{props.old_price}</div>
        <div className={s.price}>{props.price}</div>
      </div>
    </Link>
  );
};

export default Item;
