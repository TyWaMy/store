import React from "react";
import { useParams } from "react-router-dom";
import { notebookList } from "../Massive/notebookList";
import s from "./PageNotebook.module.css";

const PageNotebook = (props) => {
  const { id } = useParams();

  const notebook = notebookList.find((e) => e.id == id);

  return (
    <div className={s.Sel}>
      <img className={s.image_main} src={notebook.image_main}></img>
      <div className={s.title}>{notebook.title}</div>
      <div className={s.old_price}>{notebook.old_price}</div>
      <div className={s.price}>{notebook.price}</div>
    </div>
  );
};

export default PageNotebook;
