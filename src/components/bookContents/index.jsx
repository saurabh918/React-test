// import from modules
import React from "react";
import { AiOutlineEdit,AiOutlineDelete } from 'react-icons/ai';

// import from styles
import { StyledBookContent } from "./bookContents.styled";
import { Link } from "react-router-dom";

const BookContent = ({ book, handleEdit,handleDelete }) => {
  return (
      <StyledBookContent>
        <td>{book.id}</td>
        <td><Link to={"/book/" + book.id} title="Click here to view details">{book.title}</Link></td>
        <td>{book.category}</td>
        <td>{book.publish_date}</td>
        <td>{book.author}</td>
        <td onClick={() => handleEdit(book.id)}><AiOutlineEdit /></td>
        <td onClick={() => handleDelete(book.id)}><AiOutlineDelete className="del-btn" /></td>
      </StyledBookContent>
  );
};

export default BookContent;
