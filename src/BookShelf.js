import React from 'react';
import Book from './Book';

const BookShelf = props => {
  const { books, changeShelf } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book =>
          <Book
            key={book.id}
            book={book}
            books={books}
            changeShelf={changeShelf}
          />
        )}
      </ol>
    </div>
  )
}

export default BookShelf