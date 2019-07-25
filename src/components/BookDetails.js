import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book: { title, author, id } }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li key={id} className="flex space-between align-center">
      <div>
        {title} : {author}
      </div>
      <button
        className="button-primary"
        onClick={() => dispatch({ type: "REMOVE_BOOK", id })}
      >
        Delete book
      </button>
    </li>
  );
};

export default BookDetails;
