import React from 'react';
import * as BooksAPI from './BooksAPI';

const changeShelf = props => {
  const { book, books, changeShelf } = props;

  const handleOnChange = event => {
    const newShelf = event.target.value;
    BooksAPI.update(book, newShelf).then(shelf => {
      changeShelf(book, newShelf);
    });
  }

  let currentShelf = 'none';

  for (let shelfBook of books) {
    if (shelfBook.id === book.id) {
      currentShelf = shelfBook.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer" >
      <select onChange={handleOnChange} defaultValue={currentShelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}


export default changeShelf;