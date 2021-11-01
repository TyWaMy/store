import React from "react";
import { notebookList } from "../notebookList";
import Item from "../item";
import s from"./funk.module.css";

const Funk = () => {
  return (
    <div className={s.notebook_list}>
      {notebookList.map((e) => {
        return <Item image_main={e.image_main} title={e.title} old_price={e.old_price} price={e.price} id={e.id} />;
      })}
    </div>
  );
};

export default Funk;
