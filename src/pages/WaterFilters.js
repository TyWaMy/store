import React from "react";
import { filters } from "../Massive/waterFilters";
import ItemWaterFiltres from "../components/ItemList/iItemWaterFilters"

const WaterFilters = () => {
  return (
    <div className="waterFilters">
      {filters.map((e) => {
        return <ItemWaterFiltres {...e} />;
      })}
    </div>
  );
};

export default WaterFilters;
