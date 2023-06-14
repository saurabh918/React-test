import React from "react";
import { AiOutlineEdit,AiOutlineDelete } from 'react-icons/ai';

import { BookContentStyling } from "./styled";
const BookContent = ({ book, handleEdit,handleDelete }) => {
  return (
      <BookContentStyling>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td>{book.publish_date}</td>
        <td>{book.author}</td>
        <td onClick={() => handleEdit(book.id)}><AiOutlineEdit /></td>
        <td onClick={() => handleDelete(book.id)}><AiOutlineDelete /></td>
      </BookContentStyling>
  );
};

export default BookContent;
