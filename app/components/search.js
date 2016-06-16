import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center search-bar">
            <input className="form-control" placeholder="Search videos" onChange={ev => this.onInputChange(ev.target.value)} />
          </div>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.videoSearch(term);
  }
}

export default SearchBar;
