import { connect } from 'react-redux'
import { addNewBook } from '../../actions'
import AddBook from '../../components/AddBook'

const mapStateToProps = (state) => {
    return {
        books: state.books
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewBook: (newBook) => {
            dispatch(addNewBook(newBook))

        }
    }
}

const AddBookContainer = connect(mapStateToProps, mapDispatchToProps)(AddBook)

export default AddBookContainer