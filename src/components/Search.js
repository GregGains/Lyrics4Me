import React, { Component } from "react";
import Results from "./Results";
export default class Search extends Component {
  // ====================
  // STATE
  // ====================
  state = {
    artist: "",
    track: ""
    
  };

  handleArtistState = e => {
    this.setState({
      artist: e.target.value,
      
    })
  };

  handleTrackState = e => {
    this.setState({
      track: e.target.value,
      
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.artist, this.state.track);
    this.setState({ artist: "" });
    this.setState({ track: "" })
  };

  render() {
    return (
      <div className="search">
        <form method="GET" onSubmit={this.handleSubmit}>
          <input
            className="searchInput"
            onChange={this.handleArtistState}
            //add Onclick for state
            type="text"
            value={this.state.artist}
            placeholder="Artist Name"
          />


          <input
            className="searchInput"
            onChange={this.handleTrackState}
            //add Onclick for state
            type="text"
            value={this.state.track}
            placeholder="Song Name"
            
          />

          
       

          <input className="searchButton" type="submit" value="Search" />
        </form>

        <Results title={this.props.results.lyrics_body} 
                 search={this.props.search}
                 artist={this.props.artist}
                 track={this.props.track}
                 />
      </div>
    );
  }
}
