import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAuthor, addBook, addCategory, deleteBook, editBookInfo } from '../../features/bookSlice'

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

  useEffect(() => {
    if(editBook) {
      setTitle(editBook.title)
      setCategory(editBook.category)
      setPublishedDate(editBook.publish_date)
      setAuthor(editBook.author)
    }
  },[editBook])

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
        <option value=''>{category ? category : "Select Category"}</option>
        {
          categories.map((cat,i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))
        }
        </select>

        <button type='button' onClick={() => showCategory()}>Add Category</button>
        {
          displayAddCategory && (
            <div className='add-category'>
              <input type='text' value={newCategory} onChange={(e) => handleCategoryChange(e)} />
              <button onClick={() => handleCategory()}>Add</button>
            </div>
          )
        }


        <label htmlFor='author'>Author:</label>
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

        <button type='button' onClick={() => showAuthor()}>Add Author</button>
        {
          displayAddAuthor && (
            <div className='add-author'>
              <input type='text' value={newAuthor} onChange={(e) => handleAuthorChange(e)} />
              <button onClick={() => handleAuthor()}>Add</button>
            </div>
          )
        }

        <button type='button' onClick={(e) => handleAddBook(e)}>{editBook ? "Edit" : "Add"}</button>

        { editBook ? (<button onClick={(e) => handleDelete(e)}>Delete</button>) : ''}

      </form>
    </div>
  )
}

export default AddNewBook