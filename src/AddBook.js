import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';

class AddBook extends Component {
    state = {
        query: '',
        newBook: []
    }
    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        })
        this.setState({ query: event.target.value }, () => this.handleSearch()
        )
        //this.handleSearch();
        //console.log(this.state.newBook)
    }
    handleSearch = () => {
        //console.log(this.state.query);
        if (this.state.query !== '') {
            console.log(this.state.query);
            BooksAPI.search(this.state.query).then((book) => (

                this.setState((currentState) => ({
                    newBook: book
                }))
            ))
            console.log(this.state.newBook);

        }

    }

    render() {
        const { newBook, query } = this.state;
        const { books, updateShelf } = this.props;
        //console.log(query);
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.updateQuery} value={this.state.query} />

                    </div>
                </div>
                {query !== '' && (
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {newBook.length > 0 ? newBook.map((item) => (
                                <li key={item.id}>
                                    <Book key={item.id} book={item} updateShelf={updateShelf} currentBooks={books} />
                                </li>

                            )) : <div><h2>No Result Found.</h2></div>
                            }
                        </ol>
                    </div>
                )}
            </div >
        )
    }
}
export default AddBook;

AddBook.propTypes = {
    updateShelf: propTypes.func.isRequired
}