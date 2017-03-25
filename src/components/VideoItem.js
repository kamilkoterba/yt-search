import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video }) => (
    <div className="clear video_item__row">
        <div className="col-2">
            <img className="video_item__img" src={ video.snippet.thumbnails.default.url } />
        </div>
        <div className="col-10">
            { video.snippet.title }
        </div>
    </div>
);

export default VideoItem;
