import React from "react";
import { useParams } from "react-router-dom";
import { cameras } from "../Massive/cameras";
import s from "./PageCameras.module.css";

const PageCameras = () => {
  const { id } = useParams();

  const camera = cameras.find((e) => e.id == id);

  return (
    <div className={s.Sel}>
      <img className={s.image_main} src={camera.image_main}></img>
      <div className={s.title}>{camera.title}</div>
      <div className={s.old_price}>{camera.old_price}</div>
      <div className={s.price}>{camera.price}</div>
    </div>
  );
};

export default PageCameras;
