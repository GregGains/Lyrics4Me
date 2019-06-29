import React from "react";

export default class Lyrics extends React.Component {
  componentDidMount() {
    const { getAlbum, getLyrics, clearState } = this.props;
  
    getLyrics(this.props.match.params.track);
    getAlbum(this.props.match.params.album);
  }

  render() {
    const { song, artist } = this.props.match.params;
    const {
        album_copyright,
        album_id,
        album_label,
        album_mbid,
        album_name,
        album_pline,
        album_rating,
        album_release_date,
        artist_id,
        artist_name,
        primary_genres,
        restricted,
        updated_time
      } = this.props.albumInfo;
      const {
        explicit,
        lyrics_body,
        lyrics_copyright,
        lyrics_id,
        pixel_tracking_url,
        script_tracking_url
      } = this.props.lyrics;
    return (
      <div className="Lyrics">
        
        <h1>{song}</h1>
        <h2>{artist}</h2>
        {album_name ? <h3>{album_name}</h3> : ""}
        {lyrics_body ? <p>{lyrics_body} <br /></p> : ""}
        {album_release_date ? <p>Released: {album_release_date}</p> : ""}
        {album_rating ? <p>Rating: {album_rating}</p> : ""}
      </div>
    );
  }
}
