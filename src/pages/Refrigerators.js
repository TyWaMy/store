import React from "react";
import { refrigerators } from "../Massive/refrigerators";
import ItemRefrigerators from "../components/ItemList/ItemRefrigerators";

const Refrigerators = () => {
  return (
    <div className="refrigerators">
      {refrigerators.map((e) => {
        return <ItemRefrigerators {...e} />;
      })}
    </div>
  );
};

export default Refrigerators;
