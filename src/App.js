import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/Style.css";

// ================
// Components
// ================
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/About";
import Footer from "./components/Footer";
import Lyrics from "./components/Lyrics";
class App extends React.Component {
  // ======================
  // STATE
  // ======================
  state = {
    // NEW STATE
    topSongs: [],
    searchedSongs: [],
    lyrics: [],
    albumInfo: [],
    isLoading: false
  };
  // =========================
  // LIFE CYCLE METHODS
  // =========================
  //TOP 10 SONGS
  componentDidMount() {
    this.setState({isLoading: true})
    fetch(
      `/chart.tracks.get?page=1&page_size=10&apikey=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then(res => res.json())
      .then(res => this.setState({ topSongs: res.message.body.track_list, isLoading: false }))
      .catch(error => console.log(`Sorry there's been an error: \n${error}`));
  }

  // =======================
  // CLASS METHODS
  // =======================
  formSearch = data => {
    this.setState({isLoading: true})
    fetch(`/track.search?q_track_artist=${data}&page=1&page_size=15&s_artist_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => this.setState({searchedSongs: res.message.body.track_list,isLoading: false}))
      .catch(error => console.log(`Sorry there's been an error: \n${error}`));
    }

    getLyrics = trackId => {
      this.setState({isLoading: true});
      fetch(`/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => this.setState({lyrics: res.message.body.lyrics}))
      .catch(error => console.log(`Error: ${error}`));
    }

    getAlbum = albumId => {
      this.setState({isLoading: true});
      fetch(`/album.get?album_id=${albumId}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => this.setState({albumInfo: res.message.body.album}))
      .catch(error => console.log(`Error: ${error}`));
    }



  clearState = () => {
  this.setState({searchedSongs: [], albumInfo: [], lyrics: []})
  }
  // =====================
  // RENDER METHOD
  // =====================

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header clearState={this.clearState} />
            <Route
              exact
              path="/"
              render={() => (
                <Home topSongs={this.state.topSongs} />
              )}
            />
            <Route
              exact
              path="/Search"
              render={() => <Search formSearch={this.formSearch}
                                    results={this.state.searchedSongs}
                                    />}
            />
            <Route exact path="/:artist/:song/:album/:track"
                         render={ props => <Lyrics 
                                            {...props}
                                            getAlbum={this.getAlbum}
                                            getLyrics={this.getLyrics}
                                            clearState={this.clearState}
                                            lyrics={this.state.lyrics}
                                            albumInfo={this.state.albumInfo}
                                              />}

              />
            <Route exact path="/About" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
