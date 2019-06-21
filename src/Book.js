import React, { Component } from 'react';
import ChangeShelf from './ChangeShelf';
import noImage from './image/noImage.png';
import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap/all';

const Book = props => {
  const { in: show, book, books, changeShelf } = props;

  const title = book.title ? book.title : "No title available";
  const author = book.authors ? book.authors[0] : "";
  const coverImg = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : noImage;

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      appear
      exit
      in={show}
      onEnter={node => {
        TweenMax.from(node, 0.8, {
          scaleX: 0,
          scaleY: 0,
          opacity: 0
        })
      }}
      onExit={node => {
        TweenMax.to(node, 0.8, {
          scaleX: 0,
          scaleY: 0,
          opacity: 0
        })
      }}
      addEndListener={(node, done) => {
        TweenMax.from(node, 0.8, {
          onComplete: done
        });
      }}
    >
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
      </li>
    </Transition >
  )
}

export default Book;