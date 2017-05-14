//action types
export const ADD_BOOK = 'ADD_BOOK'
export const SAVE_BOOK = 'SAVE_BOOK'
export const TOGGLE_BOOK = 'TOGGLE_BOOK'

//action creators
//Including sample books
let nextBook = 4; 
export function addNewBook(book) {
    return { 
        type: ADD_BOOK,
        id: nextBook++,
        book
    } 
}

export function saveBook(id, newBook) {
    return {
        type: SAVE_BOOK,
        id,
        newBook
    }
}

export function toggleBook(id) {
    return {
        type: TOGGLE_BOOK,
        id
    }
}

//action types
export const SET_FILTER = 'SET_FILTER'

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

