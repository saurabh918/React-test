import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: [
    {
      //books initial data
      id: 1,
      title: "Book 1",
      category: "Fiction",
      publish_date: "2021-09-30",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Book 2",
      category: "Non-Fiction",
      publish_date: "2015-07-17",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Book 3",
      category: "Mystery",
      publish_date: "2023-12-10",
      author: "Mark Johnson",
    },
    {
      id: 4,
      title: "Book 4",
      category: "Science",
      publish_date: "2019-05-30",
      author: "Emily Davis",
    },
    {
      id: 5,
      title: "Book 5",
      category: "Biography",
      publish_date: "2023-08-03",
      author: "Michael Wilson",
    },
    {
      id: 6,
      title: "Book 6",
      category: "Fiction",
      publish_date: "2008-05-14",
      author: "John Doe",
    },
    {
      id: 7,
      title: "Book 7",
      category: "Non-Fiction",
      publish_date: "2023-08-18",
      author: "Jane Smith",
    },
    {
      id: 8,
      title: "Book 8",
      category: "Mystery",
      publish_date: "2003-07-30",
      author: "Mark Johnson",
    },
    {
      id: 9,
      title: "Book 9",
      category: "Science",
      publish_date: "2012-05-27",
      author: "Emily Davis",
    },
    {
      id: 10,
      title: "Book 10",
      category: "Biography",
      publish_date: "2023-02-20",
      author: "Michael Wilson",
    },
    {
      id: 11,
      title: "Book 11",
      category: "Fiction",
      publish_date: "2000-03-30",
      author: "John Doe",
    },
    {
      id: 12,
      title: "Book 12",
      category: "Non-Fiction",
      publish_date: "2013-05-10",
      author: "Jane Smith",
    },
    {
      id: 13,
      title: "Book 13",
      category: "Mystery",
      publish_date: "2023-10-22",
      author: "Mark Johnson",
    },
    {
      id: 14,
      title: "Book 14",
      category: "Science",
      publish_date: "2016-01-30",
      author: "Emily Davis",
    },
    {
      id: 15,
      title: "Book 15",
      category: "Biography",
      publish_date: "2019-05-18",
      author: "Michael Wilson",
    },
  ],
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
      const author = action.payload;
      if (!state.authors.includes(author)) {
        state.authors.push(author);
      }
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
