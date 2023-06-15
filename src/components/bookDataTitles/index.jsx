// import from node modules
import React from "react";

// import styled components
import { BookTitleStyling } from "./bookDataTitles.styled";

const BookDataHeading = ({ handleSort, getSortOrder }) => {
  return (
      <BookTitleStyling>
        <tr>
          <th title="sort by ID" onClick={() => handleSort("id")}>
            ID {getSortOrder("id")}
          </th>
          <th title="sort by Title" onClick={() => handleSort("title")}>
            Title {getSortOrder("title")}{" "}
          </th>
          <th title="sort by Category" onClick={() => handleSort("category")}>
            Category {getSortOrder("category")}
          </th>
          <th
            title="sort by Publish Date"
            onClick={() => handleSort("publish_date")}
          >
            Publish Date {getSortOrder("publish_date")}
          </th>
          <th title="sort by Author" onClick={() => handleSort("author")}>
            Author {getSortOrder("author")}
          </th>
          <th>Edit</th>
          <th>Del</th>
        </tr>
      </BookTitleStyling>
  );
};

export default BookDataHeading;