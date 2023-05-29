import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookData : [{
    id: 1,
    title: 'rege',
    category: 'movie',
    publish_date: "2023-06-03",
    author: 'someone'
  },
  {
    id: 2,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 3,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 4,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 5,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 6,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 7,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 8,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 9,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 10,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 11,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 12,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 13,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 14,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 15,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 16,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 17,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 18,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 19,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 20,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 21,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 22,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 23,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 24,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 25,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 26,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 27,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 28,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 29,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 30,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 31,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 32,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  },
  {
    id: 33,
    title: 'natsamrat',
    category: 'play',
    publish_date: "2001-06-03",
    author: 'authello'
  }
],
  currentPage: 1,
  itemsPerPage: 5,
  categories: ["cat","wat","kat"],
  authors: ["author"]
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setPage: (state,action) => {  
      state.currentPage = action.payload
    },
    addBook: (state,action) => {
      state.bookData.push(action.payload)
    },
    addCategory: (state,action) => {
      const category = action.payload
      if(!(state.categories.includes(category))) {
        state.categories.push(category)
      }
    },
    addAuthor: (state,action) => {
      const author = action.payload
      if(!(state.authors.includes(author))) {
       state.authors.push(author) 
      }
    },
    editBookInfo: (state,action) => {
      const bookToEdit = state.bookData.find(book => book.id === action.payload.id)
      if(bookToEdit) {
        bookToEdit.title = action.payload.title
        bookToEdit.category = action.payload.category
        bookToEdit.publish_date = action.payload.publish_date
        bookToEdit.author = action.payload.author
      }
    },
    deleteBook: (state,action) => {
      const bookToEdit = state.bookData.find(book => book.id === action.payload)
      if(bookToEdit) {
        const newBookData = state.bookData.filter(book => book.id !== action.payload)
        state.bookData = newBookData
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPage,addBook,addCategory,addAuthor,editBookInfo,deleteBook } = bookSlice.actions

export default bookSlice.reducer