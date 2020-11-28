import React from 'react';
import Book from './Book';
import propTypes from 'prop-types'

const Bookshelf = (props) => {


    const { books, title, shelf, updateShelf } = props;

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
                                    <Book key={book.id} book={book} updateShelf={updateShelf} currentBooks={books} />
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    );

}

export default Bookshelf;
Bookshelf.propTypes = {
    updateShelf: propTypes.func.isRequired,
    books: propTypes.array.isRequired,
    title: propTypes.string.isRequired
}
