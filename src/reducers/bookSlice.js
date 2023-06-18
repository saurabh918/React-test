import { createSlice } from "@reduxjs/toolkit";
import { authors,categories,books } from "../data";

const initialState = {
  bookData: books,
  currentPage: 1, // current page number
  itemsPerPage: 5, // books to show on single page
  categories: categories,
  authors: authors
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setPage: (state, action) => {
      // current page number
      return {
        ...state,
        currentPage: action.payload
      }
    },
    
    addBook: (state, action) => {
      // add new book
      return {
        ...state,
        bookData: [...state.bookData,action.payload]
      }
    },

    addCategory: (state, action) => {
      // add new category
      if (action.payload) {
        const categoryValue =
        {
          id: state.categories.length > 0 ? state.categories[state.categories.length - 1].id + 1 : 1,
          name: action.payload
        }
        const newCategories = {
          ...state,
          categories: [...state.categories, categoryValue]
        }
        return newCategories
      }
      return state
    },

    addAuthor: (state, action) => {
      // add new author
      if (action.payload) {
        const authorValue =
        {
          id: state.authors.length > 0 ? state.authors[state.authors.length - 1].id + 1 : 1,
          name: action.payload
        }
        const newAuthors = {
          ...state,
          authors: [...state.authors, authorValue]
        }
        return newAuthors
      }
      return state
    },

    editBookInfo: (state, action) => {
      // edit book
      const data = action.payload
      const updatedBookData = state.bookData.map((book) => {
        if(book.id === data.id) {
          return {
            ...book,
            title: data.title,
            category: data.category,
            publish_date: data.publish_date,
            author: data.author
          }
        }
        return book
      })

      return {
        ...state,
        bookData: updatedBookData
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
        return {
          ...state,
          bookData: newBookData
        }
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
