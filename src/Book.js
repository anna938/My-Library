import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {

    handleChange = (event, book) => {
        this.props.updateShelf(book, event.target.value);
    }

    render() {
        const { book } = this.props;
        return (
            <React.Fragment>

                <div className="book">
                    <div className="book-top">

                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => this.handleChange(e, { book })} value={book.shelf} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>


            </React.Fragment>
        )
    }

}
export default Book;

Book.PropTypes = {
    books: PropTypes.array.isRequired,

}