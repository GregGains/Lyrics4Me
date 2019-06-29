import React from "react";
import { NavLink } from "react-router-dom";

export default function Results({ song, artist, album, rating, track_id, album_id }) {
  return (
    <React.Fragment>
      <li className="searched-song">
       
         { song ? <h4 className="searched-song"> {song} <br /></h4> : "" }
         { artist ? <h3 className="searched-artist"> {artist} <br /></h3> : "" }
         { album ? <h4 className="searched-lyrics"> {album} <br /></h4> : ""} 
         { rating ? <h4 className="searched-rating">{rating}<br /></h4> : "" } 
         <NavLink className="lyrics" to={`/${artist}/${song}/${album_id}/${track_id}`} >Lyrics</NavLink>
      </li>
    </React.Fragment>
  );
}
