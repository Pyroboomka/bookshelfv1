import { connect } from 'react-redux'
import { toggleBook, saveBook, deleteBook } from '../../actions'
import Bookshelf from '../../components/Bookshelf'

const getFilteredBooks = (books, filter) => {
    switch (filter.type) {
        case 'SHOW_ALL': {
            return books
        }
        case 'FILTER': {
            return books.filter(book => {
                let isNotFiltered = false;
                for (let field in book)
                {
                    if (field === 'title' || field === 'author') {
                        if (book[field].toLowerCase().includes(filter.content.toLowerCase())) {
                            isNotFiltered = true;
                        }
                    }
                }
                return isNotFiltered;
            })
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
        },
        onDeleteClick : (id) => {
            dispatch(deleteBook(id))
        }
    }
}

const BookshelfVisible = connect(
    mapStateToProps, mapDispatchToProps
)(Bookshelf)


export default BookshelfVisible 