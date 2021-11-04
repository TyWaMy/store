import React from "react";
import Item from "../components/ItemList/Item";
import s from "./NoteBooks.module.css";
import { notebookList } from "../Massive/notebookList";

const Notebooks = () => {
  return (
    <div className={s.content}>
      <div className={s.notebook_list}>
        {notebookList.map((e) => {
          return <Item {...e} name={"notebook"}/>;
        })}
      </div>
    </div>
  );
};

export default Notebooks;
