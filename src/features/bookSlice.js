import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookData : [
    {id: 1,title: "tile",category:'cat',publish_date: "2016-09-01",author:"author"},
    {id: 2,title: "aile",category:'dat',publish_date: "2015-09-01",author:"author"},
    {id: 3,title: "hile",category:'yat',publish_date: "2018-09-01",author:"author"},
    {id: 4,title: "uile",category:'iat',publish_date: "2019-09-01",author:"author"},
    {id: 5,title: "vile",category:'jat',publish_date: "2022-09-01",author:"author"},
    {id: 6,title: "rile",category:'oat',publish_date: "1016-09-01",author:"author"},
    {id: 8,title: "hile",category:'dat',publish_date: "2516-09-01",author:"author"},
    {id: 9,title: "lile",category:'oat',publish_date: "2016-19-01",author:"author"},
    {id: 10,title: "sile",category:'pat',publish_date: "2016-07-01",author:"author"},
    {id: 11,title: "pile",category:'rat',publish_date: "2016-09-01",author:"author"},
    {id: 12,title: "mile",category:'kat',publish_date: "2016-09-01",author:"author"},
    {id: 13,title: "tile",category:'qat',publish_date: "2016-08-01",author:"author"},
    {id: 14,title: "dile",category:'lat',publish_date: "2016-09-01",author:"author"},
    {id: 15,title: "hhile",category:'eat',publish_date: "2016-03-01",author:"author"},
    {id: 16,title: "lile",category:'wat',publish_date: "2016-05-01",author:"author"},
    {id: 17,title: "qile",category:'sat',publish_date: "2016-09-05",author:"author"}

  ],
  currentPage: 1,
  itemsPerPage: 5
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setPage: (state,action) => {  
      state.currentPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPage } = bookSlice.actions

export default bookSlice.reducer