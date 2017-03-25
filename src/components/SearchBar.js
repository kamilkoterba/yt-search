import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "Initial state" };
    }

    render() {
        return (
            <div className="container-m search_bar__container">
                <input
                    className="search_bar__field"
                    value={ this.state.term }
                    onChange={ (event) => this.setState({ term: event.target.value }) }
                />
            </div>
        )
    }
}

export default SearchBar;