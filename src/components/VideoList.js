import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => (
    <div className="container-m">
        { videos.map((video) =>
            <VideoItem
                key={ video.etag }
                video={ video }
                onVideoSelect={ onVideoSelect }
            />
        ) }
    </div>
);

export default VideoList;