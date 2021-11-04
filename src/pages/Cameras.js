import React from "react";
import { cameras } from "../Massive/cameras";
import Item from "../components/ItemList/Item";

const Cameras = () => {
  return (
    <div className="bicycleList">
      {cameras.map((e) => {
        return <Item {...e} name={"camera"}/>;
      })}
    </div>
  );
};

export default Cameras;
