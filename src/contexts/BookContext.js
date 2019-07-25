import React, { createContext, useReducer, useEffect } from "react";
import uuid from "uuid/v1";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const initialState = () => {
    const localStorageItems = JSON.parse(localStorage.getItem("books"));
    return localStorageItems ? localStorageItems : [];
  };

  const [books, dispatch] = useReducer(bookReducer, [], initialState);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
