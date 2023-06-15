// import from modules

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
  const { id } = useParams() 

  const { bookData } = useSelector((state) => state.bookSlice)
  console.log(typeof(id))
  const currentBook = bookData.find(book => book.id === parseInt(id))
  console.log(currentBook)
  return (
    <>
      
    </>
  )
}

export default BookDetails