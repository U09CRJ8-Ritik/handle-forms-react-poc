import React, { useState } from 'react'

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);


  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
    // console.log(title);

  }

  return (
    <div>
      <form className='book-edit' onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" className="input" value={title} onChange={(event) => setTitle(event.target.value)} />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  )
}

export default BookEdit
