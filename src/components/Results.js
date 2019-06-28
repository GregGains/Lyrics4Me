import React from "react";

export default function Results({ song, artist, album, rating }) {
  return (
    <React.Fragment>
      <li className="searched-song">
       
         { song ? <h4 className="searched-song"> {song} <br /></h4> : "" }
         { artist ? <h3 className="searched-artist"> {artist} <br /></h3> : "" }
         { album ? <h4 className="searched-lyrics"> {album} <br /></h4> : ""} 
         { rating ? <h4 className="searched-rating">{rating}<br /></h4> : "" } 
      
      </li>
    </React.Fragment>
  );
}
