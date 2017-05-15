//import { combineReducers } from 'redux'
import { ADD_BOOK, SAVE_BOOK, TOGGLE_BOOK, DELETE_BOOK } from '../actions'

function books (state = [], action) {
    switch (action.type) {
        case ADD_BOOK: 
            return [
                ...state,
                Object.assign({}, action.book, {
                    id: action.id, 
                    isEditable: false
                })
            ]
        case SAVE_BOOK:
            return state.map((book) => {
                if (book.id === action.id) {
                    return Object.assign({}, action.newBook)
                }
                return book
            })
        case TOGGLE_BOOK:
            return state.map((book) => {
                if (book.id === action.id) {
                    return Object.assign({}, book, {isEditable: !book.isEditable})
                }
                return book
            })
        case DELETE_BOOK:
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}

export default books