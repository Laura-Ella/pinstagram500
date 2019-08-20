import React from "react";
import "./CollectionRow.css";

const CollectionRow = ({
  title = "",
  tags = "",
  image = "",
  onChange = () => {},
  onClick = () => {}
}) => (
  <div>
    <div>
      <p>{title}</p>
      <p>Tags: {tags}</p>
    </div>
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

      {/* <select
        className="teamChanger"
        onChange={onChange}
        name="team"
        value={team}
      >
        <option value="Mercades">Mercades</option>
        <option value="Red Bull">Red Bull</option>
        <option value="Ferrari">Ferrari</option>
        <option value="McLaren">McLaren</option>
        <option value="Toro Rosso">Toro Rosso</option>
        <option value="Renault">Renault</option>
        <option value="Haas">Haas</option>
        <option value="McLaren">McLaren</option>
        <option value="Racing Point">Racing Point</option>
        <option value="Williams">Williams</option>
      </select> */}

      <button className="delete" onClick={onClick}>
        X
      </button>
    </div>
  </div>
);

export default CollectionRow;
