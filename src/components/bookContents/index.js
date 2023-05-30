import React from "react";
import { BookContentStyling } from "./styled";
import { ThemeProvider } from "styled-components";
const BookContent = ({ book, handleEdit }) => {
  const theme = {
    tdColor: "#fffaf0",
  };
  return (
    <ThemeProvider theme={theme}>
      <BookContentStyling>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td>{book.publish_date}</td>
        <td>{book.author}</td>
        <td onClick={() => handleEdit(book.id)}>Edit</td>
      </BookContentStyling>
    </ThemeProvider>
  );
};

export default BookContent;
