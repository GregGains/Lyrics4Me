import React from "react";

export default function Results(props) {
  return (
    <div className={props.artist ? "results" : ""}>
      <ul className="results-list">
        <li>
          <h2 className="artist"> { props.artist } </h2> <br />
          <h3 className="track-name"> { props.track }  </h3> <br />
          <p  className="lyrics">  {props.title}    </p> <br />
        </li>
      </ul>
    </div>
  );
}
