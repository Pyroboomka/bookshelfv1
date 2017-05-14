import React from 'react'
import './AddBook.css'
import { history } from '../..' 

class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            book: {
                title: '',
                author: '',
                description: '',
                image: ''
            },
            error : false

        }
    }
    handleChange = (string, e) => {
        let updatedBookFields = Object.assign({}, this.state.book, {
            [string] : e.target.value
        });
        this.setState({
            book: updatedBookFields
        });
    }

    addBook = (e) => {
        e.preventDefault();
        let validate = function (book) {
             for (let field in book) {
                 if (book[field].trim() === '') 
                    return false;
             }
             return true
        }
        let newBook = this.state.book;
        let bool = validate(newBook);
        if (bool === true) {
            this.props.onAddNewBook(newBook);
            history.push('/');
        }
        else {
            this.setState({
                error: true
            })
        }
        
    }
    
    
    render () {
        return (
            
            <div>
                {this.state.error ?
                    <div className='errorDiv'>
                        <h4>Error:</h4>
                        <p>All fields must be filled, b-b-baka!</p>
                    </div> : ''}
                <form onSubmit={this.addBook.bind(this)}>
                    <label>Title
                        <input type='text' value={this.state.title} onChange={this.handleChange.bind(this, 'title')}/>
                    </label>                    
                    <label>Author
                        <input type='text' value={this.state.author} onChange={this.handleChange.bind(this, 'author')} />
                    </label>                    
                    <label>Description
                         <input type='text' value={this.state.description} onChange={this.handleChange.bind(this, 'description')}  />
                    </label>                   
                    <label>Image
                        <input type='text' value={this.state.image} onChange={this.handleChange.bind(this, 'image')}  />
                    </label>
                     <label>Date published
                        <input type='text' value={this.state.dateAdded} onChange={this.handleChange.bind(this, 'dateAdded')}  />
                    </label>
                    <input type='submit' value='Add' />                   
                </form>
            </div>
        )

    }
        
}

export default AddBook
