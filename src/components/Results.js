import React from "react";
import { NavLink } from "react-router-dom";

export default function Results({ song, artist, album, rating, track_id, album_id }) {
  return (
    <React.Fragment>
      <li className="searched-song">
      <NavLink className="lyrics" to={`/${artist}/${song}/${album_id}/${track_id}`} >
         { song ? <span className="searched-song"> {song} <br /></span> : "" }
         { artist ? <span className="searched-artist"> {artist} <br /></span> : "" }
         { album ? <span className="searched-lyrics"> {album} <br /></span> : ""} 
         { rating ? <span className="searched-rating">{rating}<br /></span> : "" } 
         </NavLink>
      </li>
    </React.Fragment>
  );
}
