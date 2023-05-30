import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAuthor, addBook, addCategory, deleteBook, editBookInfo } from '../../features/bookSlice'
import { AddNewBookStyle, AddSectionStyle } from './styled'
import { ThemeProvider } from 'styled-components'

const AddNewBook = ({editBook,setEditBook}) => {
  const categories = useSelector(state => state.bookSlice.categories) // fetch categories
  const authors = useSelector(state => state.bookSlice.authors) // fetch authors
  const totalBooks = useSelector(state => state.bookSlice.bookData) // all books data
  const [displayAddCategory, setDisplayAddCategory] = useState(false) // to show or hide add category popup
  const [displayAddAuthor,setDisplayAddAuthor] = useState(false) // to show or hide add author popup
  const [newCategory,setNewCategory] = useState('')
  const [newAuthor,setNewAuthor] = useState('')
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [author, setAuthor] = useState('')

  const handleAddBook = (e) => {  // add new book 
    e.preventDefault()
    if(!title || !category || !publishedDate || !author) {
      alert("Please make sure you have filled all data")
      return;
    }

    if(editBook) {
      dispatch(editBookInfo({id: editBook.id, title: title, category: category, publish_date: publishedDate, author: author}))
      setTitle('')
      setCategory('')
      setPublishedDate('')
      setAuthor('')
      setEditBook(null)
      return;
    }

    const checkTitle = totalBooks.find(book => book.title === title) 
    if(checkTitle) {
      alert("Found duplicate entry")
      return;
    }

      const newBook = {
        id: totalBooks.length > 0 ? totalBooks[totalBooks.length - 1].id + 1 : 1,
        title: title,
        category: category,
        publish_date: publishedDate,
        author: author
      }

      dispatch(addBook(newBook))

      setTitle('')
      setCategory('')
      setPublishedDate('')
      setAuthor('')
  }

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value)
  }

  const handleAuthorChange = (e) => {
    setNewAuthor(e.target.value)
  }

  const handleCategory = () => {  // add new category
    if(newCategory && !(categories.includes(newCategory))) {
      dispatch(addCategory(newCategory))
    }
    setDisplayAddCategory(false)
    setCategory(newCategory)
    setNewCategory('')
  }

  const handleAuthor = () => { // add new author
    if(newAuthor && !(authors.includes(newAuthor))) {
      dispatch(addAuthor(newAuthor))
    }
    setDisplayAddAuthor(false)
    setAuthor(newAuthor)
    setNewAuthor('')
  }

  const handleDelete = () => {
    dispatch(deleteBook(editBook.id))
  }

  const showCategory = () => {
    setDisplayAddCategory(true)
  }

  const showAuthor = () => {
    setDisplayAddAuthor(true)
  }

  const handleCancelEDit = () => {
    setEditBook(null)
    setTitle('')
    setCategory('')
    setPublishedDate('')
    setAuthor('')
  }

  const CancelAddCategory = () => {
    setDisplayAddCategory(false)
  }

  const CancelAddAuthor = () => {
    setDisplayAddAuthor(false)
  }

  useEffect(() => {
    if(editBook) {
      setTitle(editBook.title)
      setCategory(editBook.category)
      setPublishedDate(editBook.publish_date)
      setAuthor(editBook.author)
    }
  },[editBook])

  const theme = {
    headingColor: '#faebd7',
    labelColor: '#ffffff'
  }

  return (
    <ThemeProvider theme={theme}>
      <AddNewBookStyle>
        <h2>{editBook? "Edit your book" : "Add New Book"}</h2>
        <form>
          <div className='title-section'>
          <label htmlFor='title'>Title: </label>
          <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className='date-section'>
          <label htmlFor='publishedDate'>Published Date: </label>
          <input type='date' id='publishedDate' value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
          </div>
          <div className='category-section'>
          <label htmlFor='category'>Category: </label>
          <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value=''>{category ? category : "Select Category"}</option>
          {
            categories.map((cat,i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))
          }
          </select>
          <button type='button' onClick={() => showCategory()}>Add New</button>
          {
            displayAddCategory && (
              <AddSectionStyle className='add-category'>
                <h3>Add New Category</h3>
                <input type='text' value={newCategory} onChange={(e) => handleCategoryChange(e)} />
                <button onClick={() => handleCategory()}>Add</button>
                <button onClick={() => CancelAddCategory()}>Cancel</button>
              </AddSectionStyle>
            )
          }
          </div>
          <div className='author-section'>
          <label htmlFor='author'>Author: </label>
          <select id="author" value={author} onChange={e => setAuthor(e.target.value)}>
          <option value=''>{author ? author : "Select Author"}</option>
          {
            categories.map((author,i) => (
              <option key={i} value={author}>
                {author}
              </option>
            ))
          }
          </select>

          <button type='button' onClick={() => showAuthor()}>Add New</button>
          {
            displayAddAuthor && (
              <AddSectionStyle className='add-author'>
                <h3>Add New Author</h3>
                <input type='text' value={newAuthor} onChange={(e) => handleAuthorChange(e)} />
                <button onClick={() => handleAuthor()}>Add</button>
                <button onClick={() => CancelAddAuthor()}>Cancel</button>
              </AddSectionStyle>
            )
          }
          </div>
          <div className='btn-section'>
          <button type='button' onClick={(e) => handleAddBook(e)} className='add-btn'>{editBook ? "Save" : "Add"}</button>

          { editBook ? (
            <>
            <button onClick={(e) => handleDelete(e)} className='delete-btn'>Delete</button>
            <button onClick={(e) => handleCancelEDit(e)} className='cancel-btn'>Cancel</button>
            </>
            ) : ''}

          </div>
        </form>
      </AddNewBookStyle>
    </ThemeProvider>
  )
}

export default AddNewBook