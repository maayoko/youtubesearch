import React from 'react';
import $ from 'jquery';

const VideoItemList = ({video, onVideoSelect}) => {

  return (
    <li className="list-group-item">
      <div className="video-list media" >
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url} onClick={() => onVideoSelect(video)}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoItemList;
