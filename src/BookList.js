import React from 'react';
import BookShelf from './BookShelf';

const BookList = props => {
  const { books, changeShelf } = props;
  const shelves = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" },
  ];

  return (
    <div>
      {shelves.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type)

        return (
          <div key={index} className="bookshelf" >
            <h2 className="bookshelf-title">{`${shelf.title}`}</h2>
            <BookShelf
              key={index}
              books={shelfBooks}
              changeShelf={changeShelf}
            />
          </div>
        )
      })}
    </div>
  )
}

export default BookList