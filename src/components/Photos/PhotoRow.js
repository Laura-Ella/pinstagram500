import React from "react";
import "./PhotoRow.css";
const PhotoRow = ({
  username = "",
  width = "",
  height = "",
  description = "",
  url = "",
  tag = "",
  //   name = "",
  //   birthplace = "",
  //   team = "",
  // image = "",
  // tag = "",

  // componentDidMount = () => {
  //   this.props.dispatch(getPhotos);
  // },
  onChange = () => {},
  onClick = () => {
    if (this.refs.imageType) {
      console.log(this.refs.imageType.value);
    }
  }
}) => (
  <div>
    <div className="contain">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${url})`,
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
        name2="image"
        value2={image}
        name="tag"
        value={tag}
      >
        <option value="" />
        <option value="Earth" value2={image}>
          #Earth
        </option>
        <option value="Computer">#Computer</option>
      </select> */}
      <select
        className="teamChanger"
        onChange={onChange}
        name="url"
        value={url}
        value2={tag}
      >
        <option value={url} />
        <option value={url} value2="Earth">
          #Earth
        </option>
        <option value={url}>#Computer</option>
      </select>

      <button className="delete" onClick={onClick}>
        X
      </button>
    </div>
  </div>
);

export default PhotoRow;
