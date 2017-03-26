import React from "react";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

import "getbase/dist/css/styles.css";

const API_KEY = "AIzaSyAUJJ2QvFRF4N-_EtIGAIy-0H4nT4UEFtI";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        YTSearch({ key: API_KEY, term: "volvo" }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails video={ this.state.selectedVideo } />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}
export default App;
