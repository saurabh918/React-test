import React from 'react'

const BookContent = ({book}) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.publish_date}</td>
      <td>{book.author}</td>
    </tr>
  )
}

export default BookContent