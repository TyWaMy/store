import React from "react";
import { refrigerators } from "../Massive/refrigerators";
import Item from "../components/ItemList/Item";

const Refrigerators = () => {
  return (
    <div className="refrigerators">
      {refrigerators.map((e) => {
        return <Item {...e} name={"refrigerator"} />;
      })}
    </div>
  );
};

export default Refrigerators;
