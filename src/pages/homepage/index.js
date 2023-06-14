import React, { useEffect, useState } from "react";
import { HomeStyle, PageControls } from "./styled";
import WrapperComponent from "../../components/wrapper";
import { useDispatch, useSelector } from "react-redux";
import BookContent from "../../components/bookContents";
import BookDataHeading from "../../components/bookDataTitles";
import { setPage } from "../../reducers/bookSlice";
import AddNewBook from "../../components/AddNewBook";
const Home = () => {
  const dispatch = useDispatch();
  const totalBooks = useSelector((state) => state.bookSlice.bookData); // all books data
  const currentPage = useSelector((state) => state.bookSlice.currentPage); // current page number
  const itemsPerPage = useSelector((state) => state.bookSlice.itemsPerPage); // items per page
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

  const sortedData = [...totalBooks].sort((a, b) => {
    // logic to sort data when user click on any column title
    if (sortColumn === "id") {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    } else if (sortColumn === "title") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortColumn === "category") {
      return sortOrder === "asc"
        ? a.category.localeCompare(b.category)
        : b.category.localeCompare(a.category);
    } else if (sortColumn === "publish_date") {
      const dateA = new Date(a.publish_date).getTime();
      const dateB = new Date(b.publish_date).getTime();
  
      if (dateA < dateB) {
        return sortOrder === "asc" ? -1 : 1;
      } else if (dateA > dateB) {
        return sortOrder === "asc" ? 1 : -1;
      }
    } else if (sortColumn === "author") {
      return sortOrder === "asc"
        ? a.category.localeCompare(b.author)
        : b.author.localeCompare(a.author);
    }
    return 0;
  });

  const pageData = sortedData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    // when click on previous button
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleClearSearch = () => {
    setSearchKeyword('');
  };

  const handleNextPage = () => {
    // when click on next button
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
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
                  {searchKeyword === ""
                    ? pageData.map((book, i) => (
                        <BookContent
                          book={book}
                          key={i}
                          handleEdit={handleEdit}
                        />
                      ))
                    : filteredPageData.map((book, i) => (
                        <BookContent
                          book={book}
                          key={i}
                          handleEdit={handleEdit}
                        />
                      ))}
                </tbody>
              </table>
              <PageControls className="page-controls">
                <button
                  type="button"
                  onClick={handlePreviousPage}
                  disabled={
                    currentPage === 1 || filteredPages === 0 || totalPages === 0
                  }
                  className="slide-btn"
                >
                  Previous
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
                  onClick={handleNextPage}
                  disabled={
                    filteredPages
                      ? currentPage === filteredPages
                      : currentPage === totalPages ||
                        filteredPages === 0 ||
                        totalPages === 0
                  }
                  className="slide-btn"
                >
                  Next
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
