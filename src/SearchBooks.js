import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      searchResults: [],
      searchError: false,
    };
  }

  getBooks = event => {
    const query = event.target.value
    this.setState({ query })


    //if there is user input
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ searchResults: books, searchError: false })
          : this.setState({ searchResults: [], searchError: true });
      });
    } else this.setState({ searchResults: [], searchError: false });
  };



  render() {
    const { query, searchResults, searchError } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
            </Link>
          <div className="search-books-input-wrapper">
            <input
              value={query}
              onChange={this.getBooks}
              type="text"
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          {searchResults.length > 0 &&
            <div>
              <h3>Search returned {searchResults.length} books: </h3>
              <ol className="books-grid">
                {searchResults.map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    books={books}
                    changeShelf={changeShelf} />
                ))}
              </ol>
            </div>
          }
          {searchError &&
            <h3>Sorry, nothing came up in the search.</h3>}
        </div>
      </div>
    )
  }
}

export default SearchBooks