import React from "react";
import {notebookList} from "../notebookList"
import PageNotebook from "../pages/PageNotebook";


const FunkNoteBook=()=>{
  return (
    <div className="NoteBook">
      {notebookList.map((e) => {
        return (
          <PageNotebook
            image_main={e.image_main}
            title={e.title}
            old_price={e.old_price}
            price={e.price}
            docket={e.docket}
          />
        );
      })}
    </div>
  );
}

export default FunkNoteBook;