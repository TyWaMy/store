import React from "react";
import { filters } from "../Massive/waterFilters";

import Item from "../components/ItemList/Item";

const WaterFilters = () => {
  return (
    <div className="waterFilters">
      {filters.map((e) => {
        return <Item {...e} name={"waterFilter"} />;
      })}
    </div>
  );
};

export default WaterFilters;
