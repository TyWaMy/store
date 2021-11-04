import React from "react";
import { cameras } from "../Massive/cameras";
import ItemCamera from "../components/ItemList/ItemCamera";

const Cameras = () => {
  return (
    <div className="bicycleList">
      {cameras.map((e) => {
        return <ItemCamera {...e} />;
      })}
    </div>
  );
};

export default Cameras;
