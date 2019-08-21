import React from "react";
import "./CollectionRow.css";

const CollectionRow = ({
  title = "",
  tags = "",
  urls = "",
  onChange = () => {},
  onClick = () => {}
}) => (
  <div>
    <div>
      <p>{title}</p>
      <p>Tag: {tags}</p>
    </div>
    <div className="contain">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${urls[0]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          textAlign: "center",
          border: "2px solid black"
        }}
      >
        {/* <div className="textContainer">
          <div className="text">
            <p>
              <span className="description">Name: </span>
              {name}
            </p>
            <p>
              <span className="description">Birthplace: </span>
              {birthplace}
            </p>
            <p>
              <span className="description">Team: </span>
              {team}
            </p>
            <p>
              <span className="description">Rank: </span>
              {rank}
            </p>
          </div>
        </div> */}
      </div>
      <div
        className="photo"
        style={{
          backgroundImage: `url(${urls[1]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          textAlign: "center",
          border: "2px solid black"
        }}
      />
      <button className="delete" onClick={onClick}>
        X
      </button>
    </div>
  </div>
);

export default CollectionRow;
