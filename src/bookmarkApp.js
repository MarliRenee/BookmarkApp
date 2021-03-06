import React, { Component } from 'react';
import './bookmarkApp.css';
import BookmarkList from './bookmarkList';
import Fab from './fab';

class BookmarkApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <h2>Bookmarks</h2>
        <BookmarkList bookmarks={this.props.bookmarks}/>
        <Fab/>
      </div>
    );
  }
}

export default BookmarkApp;