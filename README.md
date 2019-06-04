# My Bookshelf

### Setup

Install project dependencies:

```shell
npm install
```

Start the development server:

```shell
npm start
```

A new browser window should automatically open displaying the app. If it doesn't, navigate to http://localhost:3000/ in your browser

## How to Use the App

My Bookshelf is a book management app that allows you to organize books into three categories: read, want to read, and currently reading. You can change or remove a book from its bookshelf by clicking the light blue button on the book's cover.

<p align="center">
  <img width="550" height="300" src="demo/change-shelf-demo.gif">
</p>

To add a new book into a bookshelf, click the button on the bottom right hand corner of the screen. Enter your search for a genre, author, or subject and up to 20 items will be returned.

_Note: The backend API has a fixed set of [search terms](SEARCH_TERMS.md) -- see below for search options._

<p align="center">
  <img width="550" height="300" src="demo/add-book-demo.gif">
</p>

#### Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

# Future Releases

- [ ] Notes feature
- [ ] Star rating
