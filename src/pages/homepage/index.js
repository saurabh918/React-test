import React, { useState } from 'react'
import { HomeStyle } from './styled'
import WrapperComponent from '../../components/wrapper'
import { addBook, addCategory } from '../../features/bookSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import BookContent from '../../components/bookContents'
import BookDataHeading from '../../components/bookDataTitles'
import { setPage } from '../../features/bookSlice'
import { selectData } from '../../selectors'
import AddNewBook from '../../components/AddNewBook'
const Home = () => {
  const dispatch = useDispatch()
  const books = useSelector(selectData) // get data for the current page
  const totalBooks = useSelector(state => state.bookSlice.bookData) // all books data
  const currentPage = useSelector(state => state.bookSlice.currentPage); // current page number
  const itemsPerPage = useSelector(state => state.bookSlice.itemsPerPage); // items per page
  const totalPages = Math.ceil(totalBooks.length / itemsPerPage); // calculate total pages
  
  const [searchKeyword, setSearchKeyword] = useState(''); // search value

  const [sortColumn, setSortColumn] = useState(null); // column which is referred for sorting
  const [sortOrder, setSortOrder] = useState('asc'); // decide ascending or descending
  const [editBook, setEditBook] = useState(null); // targeted book to edit

  const theme = {
    primaryColor: "blue",
    secondaryColor: "red"
  }

  const handleSort = (column) => {  // apply sorting when clicking on specific column
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedData = [...books].sort((a, b) => { // logic to sort data
    if (sortColumn === 'id') {
      return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
    } else if (sortColumn === 'title') {
      return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortColumn === 'category') {
      return sortOrder === 'asc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
    }else if (sortColumn === 'publish_date') {
      const dateA = new Date(a.publish_date);
      const dateB = new Date(b.publish_date);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortColumn === 'author') {
      return sortOrder === 'asc' ? a.category.localeCompare(b.author) : b.author.localeCompare(a.author);
    } 
    return 0;
  });

  
  const handlePreviousPage = () => { // when click on previous button
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNextPage = () => { // when click on next button
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handlePageClick = (page) => { // set the current page number
    dispatch(setPage(page));
  };

  const handleSearch = (event) => { // set search value
    setSearchKeyword(event.target.value);
  };

  const handleEdit = (id) => {
    const bookToEdit = totalBooks.find(book => book.id === id)
    if(bookToEdit) {
      setEditBook(bookToEdit)
    }
  }

  const filteredData = sortedData.filter((item) => { // get data on the basis of searched value
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

  return (
    <ThemeProvider theme={theme}>
    <HomeStyle>
      <WrapperComponent>
        <h1>Books Management System</h1>
        <input type='text' value={searchKeyword} onChange={handleSearch} placeholder='search'></input>
        <table>
          <BookDataHeading handleSort={handleSort} />
          <tbody>
              { searchKeyword === '' ?
              (sortedData.map((book,i) => (
                <BookContent book={book} key={i} handleEdit={handleEdit} />
              ))) :
              (filteredData.map((book,i) => (
                <BookContent book={book} key={i} handleEdit={handleEdit} />
              )))
            }
          </tbody>
        </table>
        <div className='page-controls'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => handlePageClick(i + 1)} disabled={currentPage === i + 1}>{i + 1}</button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
      <AddNewBook editBook={editBook} setEditBook={setEditBook} />
      </WrapperComponent>
    </HomeStyle>
    </ThemeProvider>
  )
}

export default Home