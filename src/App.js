import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
//import { Route } from 'react-router-dom';
import AddBook from './AddBook';
import BookLists from './BookLists';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    //BooksAPI.getAll().then((book) => {
    //  this.setState({
    //    books: book
    //  })
    //  console.log(this.state.books);
    //})
    BooksAPI.getAll().then((books) => {
      books.map((book) =>
        this.setState(() => ({
          books,
        }))
      );
      console.log(this.state.books);
    });
  }

  //updateShelf = (book, shelfName) => {
  //  console.log(book);
  //  console.log(shelfName);
  //  BooksAPI.update(book, shelfName).then((book) => {
  //    console.log(book);
  //  })

  //}
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((newBook) => {
      this.setState((currentState) => ({
        books: currentState.books
          .filter((b) => {
            console.log(b);
            return b.id !== book.id;
          })
          .concat({ ...book, shelf }),
      }));
      console.log(this.state.books);
    });
  };
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              <BookLists books={this.state.books} updateShelf={this.updateShelf} />
            )} />
            <Route path="/search" render={() => (
              <AddBook books={this.state.books} updateShelf={this.updateShelf} />
            )
            } />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
