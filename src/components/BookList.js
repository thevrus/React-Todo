import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <ul>
      {books.map((book) => {
        return <BookDetails book={book} key={book.id} />;
      })}
    </ul>
  ) : (
    <p>No books to read</p>
  );
};

export default BookList;
