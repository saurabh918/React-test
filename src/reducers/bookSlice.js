import { createSlice } from "@reduxjs/toolkit";
import { authors,categories,books } from "../data";

const initialState = {
  bookData: books,
  currentPage: 1, // current page number
  itemsPerPage: 5, // books to show on single page
  categories: ["Fiction", "Non-Fiction", "Mystery", "Science", "Biography"], // initially set categories
  authors: [
    "John Doe",
    "Jane Smith",
    "Mark Johnson",
    "Emily Davis",
    "Michael Wilson",
  ], // initially set authors
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setPage: (state, action) => {
      // current page number
      state.currentPage = action.payload;
    },
    addBook: (state, action) => {
      // add new book
      state.bookData.push(action.payload);
    },
    addCategory: (state, action) => {
      // add new category
      const category = action.payload;
      if (!state.categories.includes(category)) {
        state.categories.push(category);
      }
    },
    addAuthor: (state, action) => {
      // add new author
      const author = action.payload.name.trim();

      const existingAuthor = state.authors.some(
        (existingAuthor) => existingAuthor.trim().toLowerCase() === author.toLowerCase()
      );

      console.log(existingAuthor)

      if (existingAuthor) { 
        return 
      }
      
      const newAuthors = {
        ...state,
        authors: [...authors, action.payload]
      }

      return newAuthors
    },
    editBookInfo: (state, action) => {
      // edit book
      const bookToEdit = state.bookData.find(
        (book) => book.id === action.payload.id
      );
      if (bookToEdit) {
        bookToEdit.title = action.payload.title;
        bookToEdit.category = action.payload.category;
        bookToEdit.publish_date = action.payload.publish_date;
        bookToEdit.author = action.payload.author;
      }
    },
    deleteBook: (state, action) => {
      // delete book
      const bookToEdit = state.bookData.find(
        (book) => book.id === action.payload
      );
      if (bookToEdit) {
        const newBookData = state.bookData.filter(
          (book) => book.id !== action.payload
        );
        state.bookData = newBookData;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPage,
  addBook,
  addCategory,
  addAuthor,
  editBookInfo,
  deleteBook,
} = bookSlice.actions;

export default bookSlice.reducer;
