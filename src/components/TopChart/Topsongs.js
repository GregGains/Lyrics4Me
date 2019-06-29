import React from 'react';
import { NavLink } from "react-router-dom";

export default function Topsongs({artist,album,name,rating,album_id,track_id}) {
    return (
        <React.Fragment>
            <li className="top-songs">
                {name ? <span className="name">{name}<br /></span> : ""}
                {artist ? <span className="artist">{artist}<br /></span> : ""}
                {/* {album ? <span className="album">Album: {album}<br /></span> : ""} */}
                {rating ? <span className="rating">Rating: {rating}<br /></span> : ""} 
                <NavLink className="topLyrics" to={`/${artist}/${name}/${album_id}/${track_id}`}>Lyrics</NavLink>

            </li>
            
        </React.Fragment>
    )
}
