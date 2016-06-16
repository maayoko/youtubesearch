import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search';
import YTSearch from 'youtube-api-search';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

const API_KEY = 'AIzaSyBqi05j6yu950mlMDmWsJ-_jcOhN0tqJ0c';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surboards');
    this.videoSearch = this.videoSearch.bind(this);
  }

  videoSearch(term) {
    YTSearch( { key: API_KEY, term }, videos => this.setState({ videos, selectedVideo: videos[0] }) );
  }

  render() {
    const videoSearch = _.debounce( (term) => { this.videoSearch(term), 600 });
    return (
      <div className="container">
        <SearchBar videoSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
