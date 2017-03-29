import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => (
    <div className="clear video_item__row" onClick={ () => onVideoSelect(video.id.videoId) }>
        <div className="col-2">
            <img
                alt={ video.snippet.title }
                className="video_item__img"
                src={ video.snippet.thumbnails.default.url }
            />
        </div>
        <div className="col-10">
            { video.snippet.title }
        </div>
    </div>
);

export default VideoItem;
