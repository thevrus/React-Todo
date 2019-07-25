import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const addNewBook = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { book, author } });
    setBook("");
    setAuthor("");
  };
  return (
    <form className="flex" onSubmit={addNewBook}>
      <input
        type="text"
        placeholder="Type book name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        className="u-full-width"
      />
      <input
        type="text"
        placeholder="Type author's name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="u-full-width ml-10"
      />
      <input type="submit" value="Add book" className="button-primary ml-10" />
    </form>
  );
};

export default NewBookForm;
