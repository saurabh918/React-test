import { createSelector } from 'reselect';

export const selectData = createSelector( //to create sets of data
  state => state.bookSlice.bookData,
  state => state.bookSlice.currentPage,
  state => state.bookSlice.itemsPerPage,
  (bookData, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return bookData.slice(startIndex, endIndex);
  }
);