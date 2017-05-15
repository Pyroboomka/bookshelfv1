import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'
import EditBook from '../EditBook'
import { history } from '../../'
import './Bookshelf.css' 

const Bookshelf = ({books, onEditToggle, onSaveClick, onDeleteClick}) => (
    <div>
        <button className='addBookButton' onClick={()=>history.push('/add')}>Add a new book</button>
        {books.map(book => {
            if (book.isEditable) {
                return (
                    <EditBook key={book.id}
                              book={book}
                              onSaveClick={(newBook) => {onSaveClick(book.id, newBook)}}>
                    </EditBook>
                )               
            }
            else {
                return (
                    <Book key={book.id}
                          book={book}
                          onEditToggle={() => {onEditToggle(book.id)}}
                          onDeleteClick={() => {onDeleteClick(book.id)}}>
                    </Book>
                )
            }
        }            
        )}
    </div>
)

Bookshelf.PropTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.bool.isRequired,
        description: PropTypes.string,
        dateAdded: PropTypes.string.isRequired
    })),
    onEditClick: PropTypes.func.isRequired
}
export default Bookshelf