//import { combineReducers } from 'redux'
import { ADD_BOOK, SAVE_BOOK, TOGGLE_BOOK } from '../actions'

function books (state = [], action) {
    switch (action.type) {
        case ADD_BOOK: 
            return [
                ...state,
                {
                    id: action.id,
                    title: action.book.title,
                    author: action.book.author,
                    image: action.book.image,
                    description: action.book.description,
                    dateAdded: action.book.dateAdded,
                    isEditable: false 
                }
            ]
        case SAVE_BOOK:
            return state.map((book) => {
                if (book.id === action.id) {
                    return Object.assign({}, action.newBook)
                }
                return book
            })
        case TOGGLE_BOOK:
            return state.map((book)=> {
                if (book.id === action.id) {
                    return Object.assign({}, book, {isEditable: !book.isEditable})
                }
                return book
            })
        default:
            return state
    }
}

export default books