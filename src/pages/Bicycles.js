import React from "react";
import { bicycles } from "../Massive/bicycles";
import ItemBicycle from "../components/ItemList/ItemBicycle";

const Bicycles=()=>{
   return (
     <div className="bicycleList">
       {bicycles.map((e) => {
         return <ItemBicycle {...e} />;
       })}
     </div>
   );
};

export default Bicycles;