import React, { Component } from 'react';
import './App.css';
import BookshelfVisible from './containers/BookshelfVisible'
import SearchbarContainer from './containers/Searchbar'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SearchbarContainer />
        <BookshelfVisible />
      </div>
    );
  }
}

export default App;
