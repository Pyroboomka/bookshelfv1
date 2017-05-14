import { connect } from 'react-redux'
import { toggleBook, saveBook } from '../../actions'
import Bookshelf from '../../components/Bookshelf'

const getFilteredBooks = (books, filter) => {
    switch (filter.type) {
        case 'SHOW_ALL': {
            return books
        }
        case 'FILTER_BY_NAME': {
            return books.filter(book => {return (book.title).includes(filter.content)} )
        }
        default:
            return books
        
    }
}
const mapStateToProps = (state) => {
    return {
        books: getFilteredBooks(state.Bookshelf.books, state.Bookshelf.filter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onEditToggle: (id) => {
             dispatch(toggleBook(id))
            },
        onSaveClick: (id, newBook) => {
            dispatch(saveBook(id, newBook))
        }
    }
}

const BookshelfVisible = connect(
    mapStateToProps, mapDispatchToProps
)(Bookshelf)


export default BookshelfVisible 