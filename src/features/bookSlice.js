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