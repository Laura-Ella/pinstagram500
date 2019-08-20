import React from "react";
import "./PhotoRow.css";

const PhotoRow = ({
  //   name = "",
  //   birthplace = "",
  //   team = "",
  image = "",
  tag = "",
  onChange = () => {},
  onClick = () => {}
}) => (
  <div>
    <div className="contain">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${image})`,
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

      <select
        className="teamChanger"
        onChange={onChange}
        name="tag"
        value={tag}
      >
        <option value="" />
        <option value="Earth">#Earth</option>
        <option value="Computer">#Computer</option>
      </select>

      <button className="delete" onClick={onClick}>
        X
      </button>
    </div>
  </div>
);

export default PhotoRow;
