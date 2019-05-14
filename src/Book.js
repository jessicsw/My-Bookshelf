import React from 'react';
import ChangeShelf from './ChangeShelf';
import noImage from './image/noImage.png';

const Book = props => {
  const { book, books, changeShelf } = props;

  const title = book.title ? book.title : "No title available";
  const author = book.authors ? book.authors[0] : "";
  const coverImg = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : noImage;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${coverImg})`,
          }}>
          </div>
          <ChangeShelf
            book={book}
            books={books}
            changeShelf={changeShelf} />
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </li >
  )
}

export default Book