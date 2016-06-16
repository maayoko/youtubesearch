import React, { Component } from 'react';
import $ from 'jquery';
import PlayListItem from './playListItem';

const API_KEY = 'AIzaSyBqi05j6yu950mlMDmWsJ-_jcOhN0tqJ0c';
const url_fetch = 'http://10.2.200.57:3000/playlists';

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
