import React from "react";
import Topsongs from "./TopChart/Topsongs";
import Search from "./Search";
export default function Home({ topSongs, search, results, artist, track }) {
  return (
    <div className="Home">
      <h1>Lyrics 4 Me</h1>

      <h3>Top Charting Songs </h3>
      <ul className="topList">
        {topSongs.map(song => (
          <Topsongs
            key={song.track.track_id}
            artist={song.track.artist_name}
            album={song.track.album_name}
            name={song.track.track_name}
            rating={song.track.track_rating}
            album_id={song.track.album_id}
            track_id={song.track.track_id}
          />
        ))}
      </ul>
    </div>
  );
}
