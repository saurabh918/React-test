// import from node modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// import components
import WrapperComponent from "../../components/wrapper";
import BookContent from "../../components/bookContents";
import BookDataHeading from "../../components/bookDataTitles";
import AddNewBook from "../../components/AddNewBook";

// import from reducers
import { deleteBook, setPage } from "../../reducers/bookSlice";

// import styled components
import { HomeStyle, PageControls } from "./homepage.styled";

const Home = () => {
  const dispatch = useDispatch();
  const {bookData: totalBooks,currentPage,itemsPerPage} = useSelector((state) => state.bookSlice); // all books data
  const totalPages = Math.ceil(totalBooks.length / itemsPerPage); // calculate total pages

  //to select books to show on current page
  const startIndex = (currentPage - 1) * itemsPerPage; 
  const endIndex = startIndex + itemsPerPage;

  const [searchKeyword, setSearchKeyword] = useState(""); // search value
  const [sortColumn, setSortColumn] = useState(null); // column which is referred for sorting
  const [sortOrder, setSortOrder] = useState("asc"); // decide ascending or descending
  const [editBook, setEditBook] = useState(null); // targeted book to edit

  const handleSort = (column) => {
    // apply sorting when clicking on specific column
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const getSortOrder = (column) => {
    // to indicate the data sorted ascending or descending with respect to specific column
    if (column === sortColumn) {
      return <span className="sort-order">{sortOrder}</span>;
    }
    return "";
  };

  // logic to sort the data
  const sortedData = [...totalBooks].sort((a, b) => {
    switch (sortColumn) {
      case "id":
        return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
      case "title":
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      case "category":
        return sortOrder === "asc"
          ? a.category.localeCompare(b.category)
          : b.category.localeCompare(a.category);
      case "publish_date":
        const dateA = new Date(a.publish_date).getTime();
        const dateB = new Date(b.publish_date).getTime();
  
        if (dateA < dateB) {
          return sortOrder === "asc" ? -1 : 1;
        } else if (dateA > dateB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        break;
      case "author":
        return sortOrder === "asc"
          ? a.category.localeCompare(b.author)
          : b.author.localeCompare(a.author);
      default:
        return 0;
    }
  });

  const pageData = sortedData.slice(startIndex, endIndex);

  const handleCurrentPage = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    } else if (direction === 'prev' && currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleClearSearch = () => {
    setSearchKeyword('');
  };

  const handlePageClick = (page) => {
    // set the current page number
    dispatch(setPage(page));
  };

  const handleSearch = (event) => {
    // set search value
    setSearchKeyword(event.target.value);
  };

  const handleEdit = (id) => {
    // to find the book user selected to edit
    const bookToEdit = totalBooks.find((book) => book.id === id);
    if (bookToEdit) {
      setEditBook(bookToEdit);
    }
  };

  const handleDelete = (id) => {
    // delete book from store
    dispatch(deleteBook(id));
  };

  const filteredData = sortedData.filter((item) => {
    // get data on the basis of searched value
    const { id, title, category, publish_date, author } = item;
    const lowerCaseKeyword = searchKeyword.toLowerCase();
    return (
      id.toString().includes(lowerCaseKeyword) ||
      title.toLowerCase().includes(lowerCaseKeyword) ||
      category.toLowerCase().includes(lowerCaseKeyword) ||
      publish_date.toLowerCase().includes(lowerCaseKeyword) ||
      author.toLowerCase().includes(lowerCaseKeyword)
    );
  });

  const filteredPages = Math.ceil(filteredData.length / itemsPerPage);

  const filteredPageData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    // automatically redirect to page 1 when user search and get the filtered data
    dispatch(setPage(1));
  }, [searchKeyword, dispatch]);

  useEffect(() => {
    const updatedTotalPages = Math.ceil(totalBooks.length / itemsPerPage);
    if (currentPage > updatedTotalPages) {
      dispatch(setPage(updatedTotalPages));
    }
  }, [totalBooks, currentPage, dispatch, itemsPerPage]);

  return (
      <HomeStyle>
        <WrapperComponent>
          <h1>Books Management System</h1>
          <div className="row">
            <div className="display-books">
              <input
                type="text"
                className="search-field"
                value={searchKeyword}
                onChange={handleSearch}
                placeholder="search with keyword"
              ></input>
              {searchKeyword && (
                <button className="clear-search-button" onClick={handleClearSearch}>
                  &#x2715;
                </button>
                )}
              <table>
                <BookDataHeading
                  handleSort={handleSort}
                  getSortOrder={getSortOrder}
                />
                <tbody>
                  {(searchKeyword ? filteredPageData : pageData)
                    .map((book, i) => (
                        <BookContent
                          book={book}
                          key={i}
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                        />
                      ))}
                </tbody>
              </table>
              <PageControls className="page-controls">
                <button
                  type="button"
                  onClick={() => handleCurrentPage('prev')}
                  disabled={
                    currentPage === 1 || filteredPages === 0 || totalPages === 0
                  }
                  className="slide-btn"
                >
                  <FaChevronLeft />
                </button>
                {Array.from(
                  { length: filteredData ? filteredPages : totalPages },
                  (_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handlePageClick(i + 1)}
                      disabled={currentPage === i + 1}
                      className={currentPage === i + 1 ? "current-page" : ""}
                    >
                      {i + 1}
                    </button>
                  )
                )}
                <button
                  type="button"
                  onClick={() => handleCurrentPage('next')}
                  disabled={
                    filteredPages
                      ? currentPage === filteredPages
                      : currentPage === totalPages ||
                        filteredPages === 0 ||
                        totalPages === 0
                  }
                  className="slide-btn"
                >
                  <FaChevronRight />
                </button>
              </PageControls>
            </div>
            <AddNewBook editBook={editBook} setEditBook={setEditBook} />
          </div>
        </WrapperComponent>
      </HomeStyle>
  );
};

export default Home;
