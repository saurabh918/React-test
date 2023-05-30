import React from 'react'
import { BookContentStyling } from './styled'
const BookContent = ({book,handleEdit}) => {
  return (
    <BookContentStyling>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.publish_date}</td>
      <td>{book.author}</td>
      <td onClick={()=>handleEdit(book.id)}>Edit</td>
    </BookContentStyling>
  )
}

export default BookContent