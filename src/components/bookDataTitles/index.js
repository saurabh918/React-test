import React from 'react'

const BookDataHeading = ({handleSort}) => {
  return (
    <thead>
      <tr>
        <th onClick={() => handleSort('id')}>ID</th>
        <th onClick={() => handleSort('title')}>Title</th>
        <th onClick={() => handleSort('category')}>Category</th>
        <th onClick={() => handleSort('publish_date')}>Publish Date</th>
        <th onClick={() => handleSort('author')}>Author</th>
        <th>Edit</th>
      </tr>
    </thead>
  )
}

export default BookDataHeading