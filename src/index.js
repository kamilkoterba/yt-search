import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import App from "./App";

const API_KEY = "AIzaSyAUJJ2QvFRF4N-_EtIGAIy-0H4nT4UEFtI";
YTSearch({key: API_KEY, term: "volvo"}, (response) => {
    console.log(response);
});

ReactDOM.render(<App />, document.getElementById("root"));
