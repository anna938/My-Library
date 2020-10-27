import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import propTypes from 'prop-types';

class BookLists extends Component {

    state = {
        shelves: [
            { title: 'Currentlty Reading', shelf: 'currentlyReading' },
            { title: 'Want To Read', shelf: 'wantToRead' },
            { title: 'Read', shelf: 'read' },
        ]
    }
    render() {
        const { shelves } = this.state;
        const { books, updateShelf } = this.props;
        return (
            <React.Fragment>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>My Library</h1>
                    </div>

                    <div className="list-books-content">
                        <div>
                            {shelves.map((item) => (
                                <Bookshelf key={item.title} shelf={item.shelf} books={books} title={item.title} updateShelf={updateShelf} />
                            ))}
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search"><button>Add a Book</button></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BookLists;

BookLists.propTypes = {
    updateShelf: propTypes.func.isRequired,
    books: propTypes.array.isRequired,

}
