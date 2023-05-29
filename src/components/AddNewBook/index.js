import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAuthor, addBook, addCategory } from '../../features/bookSlice'

const AddNewBook = () => {
  const categories = useSelector(state => state.bookSlice.categories) // fetch categories
  const authors = useSelector(state => state.bookSlice.authors) // fetch authors
  const totalBooks = useSelector(state => state.bookSlice.bookData) // all books data
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [author, setAuthor] = useState('')

  const handleAddBook = (e) => {  // add new book 
    e.preventDefault()
    if(!title || !category || !publishedDate || !author) {
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

  const handleCategory = () => {  // add new category
    if(category && !(categories.includes(category))) {
      dispatch(addCategory(category))
    }
  }

  const handleAuthor = () => { // add new author
    if(author && !(authors.includes(author))) {
      dispatch(addAuthor(author))
    }
  }

  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />

        <label htmlFor='publishedDate'>Published Date:</label>
        <input type='date' id='publishedDate' value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>

        <label htmlFor='category'>Category:</label>
        <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
        <option value=''>Select Category</option>
        {
          categories.map((cat,i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))
        }
        </select>

        <label htmlFor='author'>Author:</label>
        <select id="author" value={author} onChange={e => setAuthor(e.target.value)}>
        <option value=''>Select Author</option>
        {
          categories.map((author,i) => (
            <option key={i} value={author}>
              {author}
            </option>
          ))
        }
        </select>

        <button onClick={(e) => handleAddBook(e)}>Add Button</button>

      </form>
    </div>
  )
}

export default AddNewBook