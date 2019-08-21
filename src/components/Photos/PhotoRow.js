import React from "react";
import "./PhotoRow.css";

const PhotoRow = ({
  username = "",
  width = "",
  height = "",
  description = "",
  url = "",
  tag = "",

  onChange = () => {},
  onClick = () => {}
}) => (
  <div>
    <div className="contain">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundHeight: height,
          backgroundWidth: width,
          backgroundRepeat: "no-repeat",
          position: "relative",
          border: "2px solid black",
          textAlign: "left"
        }}
      >
        {/* <div className="textContainer">
          <div className="text">
            <p>
              <span className="tagDisplay">User: </span>
              {username}
            </p>
            <p>
              <span className="tagDisplay">Tag: </span>
              {tag}
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
      {/* <select
        className="teamChanger"
        onChange={onChange}
        name="tag"
        value={tag}
      >
        <option value="" />
        <option value="Earth" value2="Earth">
          #Earth
        </option>
        <option value="Computer">#Computer</option>
      </select> */}

      <button className="delete" onClick={onClick}>
        Add to Favorites
      </button>
    </div>
  </div>
);

export default PhotoRow;
