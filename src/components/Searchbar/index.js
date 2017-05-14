import React, { Component } from 'react'
import './Searchbar.css'

class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            searchInput: e.target.value
        }, () => {
            this.props.onSearchButtonClick({
                 type:'FILTER_BY_NAME',
                 content: this.state.searchInput
                })
              }
        );
    }

    render() {
        return (
            <div className='searchBar'> 
                <label>Search books by title</label>
                <input type='text' value={this.state.searchInput} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}

export default Searchbar