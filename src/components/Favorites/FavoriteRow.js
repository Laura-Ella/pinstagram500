import React from "react";
import "./FavoriteRow.css";

const FavoriteRow = ({
  title = "",
  tags = " ",
  url = "",
  onChange = () => {},
  onClick = () => {}
}) => (
  <div>
    <div>
      {/* <p>{title}</p>
      <p>
        Tags: <span className="tags">{`${tags}`}</span>
      </p> */}
    </div>
    <div className="contain">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${url})`
        }}
      />
      {/* <div
        className="photo"
        style={{
          backgroundImage: `url(${urls[1]})`
        }}
      />
      <div
        className="photo"
        style={{
          backgroundImage: `url(${urls[2]})`
        }}
      /> */}
      <select
        className="teamChanger"
        onChange={onChange}
        name="tags"
        value={tags}
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

export default FavoriteRow;

{
  /* <div className="textContainer">
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
        </div> */
}
