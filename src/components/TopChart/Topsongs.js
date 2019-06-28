import React from 'react';


export default function Topsongs({artist,album,name,rating}) {
    return (
        <React.Fragment>
            <li className="top-songs">
                {name ? <span className="name">{name}<br /></span> : ""}
                {artist ? <span className="artist">{artist}<br /></span> : ""}
                {/* {album ? <span className="album">Album: {album}<br /></span> : ""} */}
                {rating ? <span className="rating">Rating: {rating}<br /></span> : ""} 
                <a className="topLyrics">Lyrics</a>

            </li>
            
        </React.Fragment>
    )
}
