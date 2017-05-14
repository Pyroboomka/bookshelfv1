import React from 'react'
import PropTypes from 'prop-types'
import './Book.css'


const Book = ({title, image, author, description, dateAdded,onEditToggle}) => (
    <div className='book'>
        <div className='imageDiv'>
            <img src={image} alt='sad_panda'></img>
        </div>
        <div className='contentDiv'>
            <h2>{author}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>Published {dateAdded}</span>            
        </div>
        <div className='controlsDiv'>
            <button onClick={onEditToggle}>Edit</button>
        </div>
        
    </div>               
)

Book.PropTypes = {
    book: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Book