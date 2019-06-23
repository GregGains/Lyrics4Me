import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./css/Style.css";

// ================
// Components
// ================
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends React.Component {
  // ======================
  // STATE
  // ======================
  state = {
    artist: "",
    track: "",
    results: [],
   
  }
  // =======================
  // CLASS METHODS
  // =======================
  displaySearch = (artist,track) => {
     this.setState(prevState => ({
       artist: prevState.artist = artist
     }))
     this.setState(prevState => ({track: prevState.track = track}))
  };


  search = (artist, track) => {
    let url = `/matcher.lyrics.get?format=json&callback=callback&q_track=${track}&q_artist=${artist}&apikey=953dfdaed2e936de26382bafb309463e`;
    
    fetch(url)
    .then(response => response.json())
    .then(response => this.setState({results: response.message.body.lyrics}))
    .catch(error => console.log(`Sorry, there has been an error \n ${error}`));

    this.displaySearch(artist, track);
  }

  // =========================
  // LIFE CYCLE METHODS
  // =========================

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
                <Home search={this.search} 
                      results={this.state.results}
                      artist={this.state.artist}
                      track={this.state.track}
                     />
              )}
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
