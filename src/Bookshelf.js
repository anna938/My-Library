import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types'

class Bookshelf extends Component {
    render() {
        const { books, title, shelf, updateShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books
                            .filter((book) => book.shelf === shelf)
                            .map((book) => {
                                return (
                                    <li key={book.id}>
                                        <Book key={book.id} book={book} updateShelf={updateShelf} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
Bookshelf.PropTypes = {
    updateShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}