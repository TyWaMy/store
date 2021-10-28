import React from "react";
import { notebookList } from "../notebookList";
import Item from "../item";


  export function Coll() {
  return (
    
      <div className="Coll">
        {notebookList.map((e) => {
          return <Item image_main={e.image_main} title={e.title} old_price={e.old_price} price={e.price} />;
        })}
      </div>
    
  );
}






