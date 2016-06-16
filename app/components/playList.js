import React, { Component } from 'react';
import $ from 'jquery';
import PlayListItem from './playListItem';

const API_KEY = 'AIzaSyBqi05j6yu950mlMDmWsJ-_jcOhN0tqJ0c';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      currentPlaying: null
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.ids.map(id => <PlayListItem key={id} id={id} />)}
      </div>
    )
  }
}

export default PlayList;
