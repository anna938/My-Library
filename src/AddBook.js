import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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
        }

    }

    render() {
        const { newBook, query } = this.state;
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
                            {newBook.length > 0 && newBook.map((item) => (
                                <Book key={item.id} book={item} updateShelf={this.props.updateShelf} />

                            ))
                            }
                        </ol>
                    </div>
                )}
            </div >
        )
    }
}
export default AddBook;

AddBook.PropTypes = {
    updateShelf: PropTypes.func.isRequired
}