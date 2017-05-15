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
                 type:'FILTER',
                 content: this.state.searchInput
                })
              }
        );
    }

    render() {
        return (
            <div className='searchBar'> 
                <label>Search books</label>
                <input type='text' placeholder='Type here!' value={this.state.searchInput} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}

export default Searchbar