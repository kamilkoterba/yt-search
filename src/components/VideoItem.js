import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video }) => (
    <div className="clear video_item__row">
        <div className="col-3">
            <img
                alt={ video.snippet.title }
                className="video_item__img"
                src={ video.snippet.thumbnails.medium.url }
            />
        </div>
        <div className="col-9">
            { video.snippet.title }
        </div>
    </div>
);

export default VideoItem;
