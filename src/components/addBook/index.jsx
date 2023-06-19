// import modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import AddNewSection from "../addNewPopup";

//import from reducers
import {
  addAuthor,
  addBook,
  addCategory,
  editBookInfo,
} from "../../reducers/bookSlice";

// import styled components
import { StyledAddNewBook } from "./addnewbook.styled";
import Button from "../../elements/button";
import Select from "../../elements/select";


const AddNewBook = ({ editBook, setEditBook }) => {
  const {categories,authors, bookData:totalBooks} = useSelector((state) => state.bookSlice); // fetch categories

  // use states
  const [displayAddCategory, setDisplayAddCategory] = useState(false); // to show or hide add category popup
  const [displayAddAuthor, setDisplayAddAuthor] = useState(false); // to show or hide add author popup
  const [newCategory, setNewCategory] = useState(""); // to get new category name
  const [newAuthor, setNewAuthor] = useState(""); // to get new author name
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [author, setAuthor] = useState("");

  
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    // add new book

    if(title && category && publishedDate && author) {
      e.preventDefault()
    }

    if (editBook) {
      dispatch(
        editBookInfo({
          id: editBook.id,
          title: title,
          category: category,
          publish_date: publishedDate,
          author: author,
        })
      );
      
      setTitle("");
      setCategory("");
      setPublishedDate("");
      setAuthor("");
      setEditBook(null)
      return;
    }

    const checkTitle = totalBooks.find((book) => book.title === title);
    if (checkTitle) {
      alert("Found duplicate entry (title)");
      return;
    }

    const newBook = {
      id: totalBooks.length > 0 ? totalBooks[totalBooks.length - 1].id + 1 : 1,
      title: title,
      category: category,
      publish_date: publishedDate,
      author: author,
    };

    console.log(author)

    dispatch(addBook(newBook));
    alert("New book added");
    setTitle("");
    setCategory("");
    setPublishedDate("");
    setAuthor("");
  };

  const handleCategoryChange = (e) => {
    // set new category value
    setNewCategory(e.target.value);
  };

  const handleAuthorChange = (e) => {
    // set new author value
    setNewAuthor(e.target.value);
  };

  const handleCategory = () => {
    // set new category
    const existingCategory = categories.find(
      (category) => category.name.trim().toLowerCase() === newCategory.trim().toLowerCase()
    );
  
    if (existingCategory) {
      setCategory(existingCategory.name);
    } else {
      dispatch(addCategory(newCategory));
      setCategory(newCategory);
    }
  
    setDisplayAddCategory(false);
    document.body.classList.remove("disable-scroll");
    setNewCategory("");
  };

  const handleAuthor = () => {
    // set new author
    const existingAuthor = authors.find(
      (author) => author.name.trim().toLowerCase() === newAuthor.trim().toLowerCase()
    );
  
    if (existingAuthor) {
      setAuthor(existingAuthor.name);
    } else {
      dispatch(addAuthor(newAuthor));
      setAuthor(newAuthor);
    }
  
    setDisplayAddAuthor(false);
    document.body.classList.remove("disable-scroll");
    setNewAuthor("");
  };

  const showCategory = () => {
    // to show popup to fill new category name
    setDisplayAddCategory(true);
    document.body.classList.add("disable-scroll");
  };

  const showAuthor = () => {
    // to show popup to fill new author name
    setDisplayAddAuthor(true);
    document.body.classList.add("disable-scroll");
  };

  const handleCancelEDit = () => {
    // when user hit cancel button after editing book
    setEditBook(null);
    setTitle("");
    setCategory("");
    setPublishedDate("");
    setAuthor("");
  };


  const CancelAddCategory = () => {
    // when user hit cancel button while adding new category
    setDisplayAddCategory(false);
    document.body.classList.remove("disable-scroll");
  };

  const CancelAddAuthor = () => {
    // when user hit cancel button while adding new author
    setDisplayAddAuthor(false);
    document.body.classList.remove("disable-scroll");
  };

  useEffect(() => {
    // to check if the user click to edit the book
    if (editBook) {
      setTitle(editBook.title);
      setCategory(editBook.category);
      setPublishedDate(editBook.publish_date);
      setAuthor(editBook.author);
    } else {
      setTitle("");
      setCategory("");
      setPublishedDate("");
      setAuthor("");
    }
  }, [editBook]);

  return (
      <StyledAddNewBook>
        <h2>{editBook ? "Edit your book" : "Add New Book"}</h2>
        <form onSubmit={handleAddBook}>
          <div className="title-section">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              maxLength={12}
              value={title}
              placeholder="Book Title..."
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="date-section">
            <label htmlFor="publishedDate">Published Date: </label>
            <input
              type="date"
              id="publishedDate"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              required
            />
          </div>
          <div className="category-section">
            <label htmlFor="category">Category: </label>
            <Select id="category" value={category} onChange={(e) => {setCategory(e.target.value)}} data={categories} label="Select Category" />
            <Button type="button" label="Add New" className="add-new-btn" onClick={showCategory} />
              
            {displayAddCategory && (
              <AddNewSection
                name="Category"
                value={newCategory}
                handleChange={handleCategoryChange}
                handleDispatch={handleCategory}
                cancel={CancelAddCategory}
              />
            )}
          </div>
          <div className="author-section">
            <label htmlFor="author">Author: </label>
            <Select id="author" value={author} onChange={(e) => {setAuthor(e.target.value)}} data={authors} label="Select Author" />
            <Button type="button" label="Add New" className="add-new-btn" onClick={showAuthor} />
            {displayAddAuthor && (
              <AddNewSection
                name="Author"
                value={newAuthor}
                handleChange={handleAuthorChange}
                handleDispatch={handleAuthor}
                cancel={CancelAddAuthor}
              />
            )}
          </div>
          <div className="btn-section">
          <Button type="submit" label={editBook ? "Save" : "Add"} className="add-btn" />

            {editBook && (
              <>
              <Button type="button" label="cancel" className="cancel-btn" onClick={handleCancelEDit} />
              </>
            )}
          </div>
        </form>
        <p>Number of Books: {totalBooks.length}</p>
        <p>Number of Authors: {authors.length}</p>
      </StyledAddNewBook>
  );
};

export default AddNewBook;
