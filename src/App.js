import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import { Link, Route } from 'react-router-dom';
import BookList from './BookList';

class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(prevBook => prevBook.id !== book.id)
          .concat(book)
      }));
    });
  }

  componentDidMount() {
    // Retrieves all books on the 3 shelves
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks books={books} changeShelf={this.changeShelf} />
        )} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Bookshelf</h1>
            </div>
            <div className="list-books-content">
              {books.length > 0 &&
                <BookList books={books} changeShelf={this.changeShelf} />}
            </div>
            <div className="open-search">
              <Link to="/search"></Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp