import React from 'react';
import Book from './Book';
import { TransitionGroup } from 'react-transition-group';

const BookShelf = props => {
  const { books, changeShelf } = props;

  return (
    <div className="bookshelf-books">
      <ol>
        <TransitionGroup className="books-grid">
          {books.map(book =>
            <Book
              key={book.id}
              book={book}
              books={books}
              changeShelf={changeShelf}
            />
          )}
        </TransitionGroup>
      </ol>
    </div>
  )
}

export default BookShelf