// import from modules

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledBookDetails } from "./bookDetails.styled";

const BookDetails = () => {
  const { id } = useParams();

  const { bookData } = useSelector((state) => state.bookSlice);
  console.log(typeof id);
  const currentBook = bookData.find((book) => book.id === parseInt(id));
  console.log(currentBook);
  return (
    <>
      <StyledBookDetails className="book-details">
        <div className="book-image">
          <img src="/assets/images/book.png" alt="book details" />
        </div>
        <div className="book-info">
          <h2>{currentBook.title}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex qui
            saepe iure sunt molestias explicabo dolor ut suscipit. Voluptates
            nisi nulla rem architecto harum eum quam cumque numquam, odit atque,
            modi ullam dolore quos sunt placeat repellat illo velit itaque quod
            sit reprehenderit culpa ipsam, porro incidunt! Eaque magnam esse
            maxime doloribus architecto molestias cumque tempora praesentium
            repellat, dicta placeat exercitationem distinctio suscipit accusamus
            nesciunt nulla minus ducimus nostrum recusandae vero voluptates.
            Repellendus eaque dolorem id, ratione tempora neque hic error nobis
            provident reprehenderit inventore placeat architecto rerum minima
            itaque molestias accusamus distinctio assumenda sint incidunt
            exercitationem sequi. Dolorum, hic.
          </p>
          <h3>
            Category: <span>{currentBook.category}</span>
          </h3>
          <h3>
            Author: <span>{currentBook.author}</span>
          </h3>
          <h3>
            Published at: <span>{currentBook.publish_date}</span>
          </h3>
        </div>
      </StyledBookDetails>
    </>
  );
};

export default BookDetails;
