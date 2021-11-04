import React from "react";
import { bicycles } from "../Massive/bicycles";
import Item from "../components/ItemList/Item";

const Bicycles=()=>{
   return (
     <div className="bicycleList">
       {bicycles.map((e) => {
         return <Item {...e} name={"bicycle"} />;
       })}
     </div>
   );
};

export default Bicycles;