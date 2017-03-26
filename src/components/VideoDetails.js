import React from "react";

import "./VideoDetails.css";

const URL = "https://www.youtube.com/embed";

const VideoDetail = ({ video }) => (
    <div className="container-m video_details__container">
        { !video
            ? "Loading..."
            : <iframe src={ `${URL}/${video.id.videoId}` } className="video_details__iframe"></iframe>
        }
    </div>
);

export default VideoDetail;
