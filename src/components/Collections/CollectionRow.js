import React from "react";
import "./CollectionRow.css";

const CollectionRow = ({
  title = "",
  tags = " ",
  url = "",
  onChange = () => {},
  onClick = () => {}
}) => (
  <div>
    <div>
      <p>{title}</p>
      <p>
        Tags: <span className="tags">{`${tags}`}</span>
      </p>
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
          backgroundImage: `url(${url[1]})`
        }}
      />
      <div
        className="photo"
        style={{
          backgroundImage: `url(${url[2]})`
        }}
      /> */}
      <select
        className="teamChanger"
        onChange={onChange}
        name="url"
        value={url}
      >
        <option value={url} />
        <option value={url}>Add to Favorites</option>
      </select>
      {/* <button className="delete" onClick={onClick}>
        Add to Favorites
      </button> */}
    </div>
  </div>
);

export default CollectionRow;

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
