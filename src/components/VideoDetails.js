import React from "react";

import "./VideoDetails.css";

const URL = "https://www.youtube.com/embed";

const VideoDetail = ({ videoId }) => (
    <div className="container-m video_details__container">
        { !videoId
            ? "Loading..."
            : <iframe src={ `${URL}/${videoId}` } className="video_details__iframe"></iframe>
        }
    </div>
);

export default VideoDetail;
