import React from 'react'
const BookContent = ({book,handleEdit}) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.publish_date}</td>
      <td>{book.author}</td>
      <td onClick={()=>handleEdit(book.id)}>Edit</td>
    </tr>
  )
}

export default BookContent