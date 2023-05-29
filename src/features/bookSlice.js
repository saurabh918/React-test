import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookData : [],
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPage,addBook,addCategory,addAuthor } = bookSlice.actions

export default bookSlice.reducer