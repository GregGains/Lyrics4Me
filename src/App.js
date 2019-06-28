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
    fetch(`/track.search?q_track_artist=${data}&page=1&page_size=10&s_artist_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => this.setState({searchedSongs: res.message.body.track_list,isLoading: false}))
      .catch(error => console.log(`Sorry there's been an error: \n${error}`));
    }
  // =====================
  // RENDER METHOD
  // =====================

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
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
            <Route exact path="/Search/Artist/Lyrics" render={ () => <Lyrics />} />
            <Route exact path="/About" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
