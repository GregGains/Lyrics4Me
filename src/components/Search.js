import React, { Component } from "react";
import Results from "./Results";
export default class Search extends Component {
  // ====================
  // STATE
  // ====================
  state = {
    value: ""
  }

  handleState = e => {
    this.setState({value: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.formSearch(this.state.value);
    this.setState({value: ""});
  }


  render() {
    return (
      <div className="search">
        <form method="GET" onSubmit={this.handleSubmit}>
          <input
            className="searchInput"
            onChange={this.handleState}
            value={this.state.value}
            placeholder="Song Name"
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>

        <ul className="results">
          {this.props.results.map(song => <Results 
                                            key={song.track.track_id}
                                            song={song.track.track_name}
                                            artist={song.track.artist_name}
                                            album={song.track.album_name}
                                            rating={song.track.track_rating}  
                                           /> )}
        </ul>
      </div>
    );
  }
}
