import React from "react";
import Search from "./Search";
export default function Home(props) {
  return (
    <div className="Home">
      <h1>Lyrics App</h1>
      <p>Start by searching for a song</p>
      <Search search={props.search} 
              results={props.results}
              artist={props.artist}
              track={props.track}
         />
    </div>
  );
}
