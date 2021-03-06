import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h4>React HOOKS / Book list</h4>
      <p>Currently you have {books.length} books. </p>
    </div>
  );
};

export default Navbar;
