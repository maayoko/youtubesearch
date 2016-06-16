import React from 'react';
import $ from 'jquery';

const PlayListItem = ({id}) => {
  const url = `https://www.youtube.com/embed/${id}`;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(id)}>
      <div className="video-list media">
        <div className="media-left">
          <iframe src={url} className="embed-responsive-item"></iframe>
        </div>
      </div>
    </li>
  );
}

export default PlayListItem;
