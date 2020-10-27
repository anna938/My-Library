import React, { Component } from 'react';
import propTypes from 'prop-types'


class Book extends Component {
    handleChange = (event, book) => {
        //console.log(book.id)
        this.props.updateShelf(book, event.target.value);
    }

    render() {
        const { book, currentBooks } = this.props;
        let result;
        if (book !== '') {
            result = currentBooks.filter(a => a.id === book.id).map(item => item.shelf);
            //console.log(result[0]);
            //console.log(result['id']);
            //console.log(book.shelf);
        }

        return (
            <React.Fragment>

                <div className="book">
                    <div className="book-top">
                        {/*{findArrayElementByTitle(currentBooks, book)}*/}
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? `${book.imageLinks.thumbnail}` : `http://via.placeholder.com/128x193?text=No%20Cover`})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => this.handleChange(e, book)} value={result[0] !== undefined ? result[0] : "none"} >
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

Book.propTypes = {
    book: propTypes.object.isRequired,

}