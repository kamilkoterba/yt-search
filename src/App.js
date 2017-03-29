import React from "react";
import YTSearch from "youtube-api-search";
import { debounce } from "lodash";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import { Link, browserHistory } from "react-router";

import "getbase/dist/css/styles.css";

const API_KEY = "AIzaSyAUJJ2QvFRF4N-_EtIGAIy-0H4nT4UEFtI";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: props.params.videoId
        };
        this.searchVideo("volvo", !props.params.videoId);
    }

    searchVideo(term, shouldSelectVideo = true) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({
                videos
            });
            shouldSelectVideo && this.selectVideo(videos[0].id.videoId);
        });
    }

    selectVideo(videoId) {
        this.setState({
            selectedVideo: videoId
        });
        browserHistory.push("/details/" + videoId)
    }

    render() {
        const searchVideo = debounce((term) => this.searchVideo(term), 300);

        return (
            <div>
                <SearchBar onSearch={ (term) => searchVideo(term) } />
                <VideoDetails videoId={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.selectVideo(selectedVideo) }
                    videos={ this.state.videos } />
                <Link to="/contact">Contact us</Link>
            </div>
        );
    }
}
export default App;
