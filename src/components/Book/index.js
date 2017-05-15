import React from 'react'
import PropTypes from 'prop-types'
import './Book.css'


const Book = ({book ,onEditToggle, onDeleteClick}) => (
    <div className='book'>
        <div className='imageDiv'>
            <img src={book.image} alt='sad_panda'></img>
        </div>
        <div className='contentDiv'>
            <h2>{book.author}</h2>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <span>Published {book.dateAdded}</span>            
        </div>
        <div className='controlsDiv'>
            <button onClick={onEditToggle}>Edit</button>
            <button onClick={onDeleteClick}>Delete</button>
        </div>
        
    </div>               
)

Book.PropTypes = {
    book: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Book