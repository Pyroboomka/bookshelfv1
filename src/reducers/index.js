import { combineReducers } from 'redux'
import books from './Books'
import filter from './Filters'

const Bookshelf = combineReducers({
    books, 
    filter
});

export default Bookshelf