import React from "react";
import { notebookList } from "../notebookList";
import PageNotebook from "../pages/PageNotebook";

const FunkNoteBook = () => {
  return (
    <div className="NoteBook">
      {notebookList.map((ce) => {
        return (
          <PageNotebook
            image_main={ce.image_main}
            title={ce.title}
            old_price={ce.old_price}
            price={ce.price}
            docket={ce.docket}
          />
        );
      })}
    </div>
  );
};

export default FunkNoteBook;
