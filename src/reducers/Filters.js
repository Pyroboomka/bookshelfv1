import { SET_FILTER } from '../actions'

function filter (state = {}, action) {
    switch (action.type) {
        case (SET_FILTER): 
            return {
                type: action.filter.type,
                content: action.filter.content
                }
        default:
            return state
    }

}
export default filter