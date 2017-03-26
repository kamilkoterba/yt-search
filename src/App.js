import React from "react";
import YTSearch from "youtube-api-search";
import { debounce } from "lodash";

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
        this.searchVideo("volvo");
    }

    searchVideo(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const searchVideo = debounce((term) => this.searchVideo(term), 300);

        return (
            <div>
                <SearchBar onSearch={ (term) => searchVideo(term) }/>
                <VideoDetails video={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo })}
                    videos={ this.state.videos } />
            </div>
        );
    }
}
export default App;
