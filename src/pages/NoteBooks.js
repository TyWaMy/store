import React from "react";
import Item from "../components/ItemList/ItemNotebook";
import s from "./NoteBooks.module.css";
import { notebookList } from "../Massive/notebookList";

const Notebooks = () => {
  return (
    <div className={s.content}>
      <div className={s.notebook_list}>
        {notebookList.map((e) => {
          return <Item image_main={e.image_main} title={e.title} old_price={e.old_price} price={e.price} id={e.id} />;
        })}
      </div>
    </div>
  );
};

export default Notebooks;
