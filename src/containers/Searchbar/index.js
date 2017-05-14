import { connect } from 'react-redux'
import { setFilter } from '../../actions'
import Searchbar from '../../components/Searchbar'

const mapStateToProps = (state) => {
    return {
        filters: state.Bookshelf.filters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchButtonClick: (filter) => {
            dispatch(setFilter(filter))
        }
    }
}
const SearchbarContainer = connect(mapStateToProps, mapDispatchToProps)(Searchbar)

export default SearchbarContainer