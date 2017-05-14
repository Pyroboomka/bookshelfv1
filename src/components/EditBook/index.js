import React, { Component } from 'react'
import './EditBook.css'

class EditBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: this.props.book,
        }
    }

    handleChange = (string, e) => {
        this.state.book[string] = e.target.value;
        this.setState({
            book: this.state.book
        })
    }

    submit = (e) => {
        e.preventDefault();
        let editedBook = Object.assign({}, this.state.book, {isEditable: !this.state.book.isEditable})
        this.props.onSaveClick(editedBook);
    }
    render() {
        return (
            <div className='book'>
                <div className='imageDiv'>
                  <img src={this.state.book.image} alt='panda'></img>    
                </div>
                <div className='contentDiv'>
                    <form onSubmit={this.submit}>                  
                        <label>Author</label>
                        <input className='bookInput'
                               type='text' value={this.state.book.author}
                               onChange={this.handleChange.bind(this, 'author')} />
                        <label>Title</label>
                        <input className='bookInput'
                               type='text' value={this.state.book.title}
                               onChange={this.handleChange.bind(this, 'title')} />
                        <label>Description</label>
                        <input className='bookInput'
                               type='text'
                               value={this.state.book.description}
                               onChange={this.handleChange.bind(this, 'description')} />
                        <label>Publish date</label>
                        <input className='bookInput'
                               type='text'
                               value={this.state.book.dateAdded}
                               onChange={this.handleChange.bind(this, 'dateAdded')} />
                        <input type='submit' defaultValue='Save'/>                                 
                    </form>
                </div>
                <div className='controlsDiv'></div>                                   
            </div>       

        )
    }

}

export default EditBook


