import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Collections.css";

class Collections extends Component {
  render() {
    let databaseCollectionsUrls = this.props.collectionData.map(list => {
      let rawUrls = list.preview_photos.map(elements => {
        return elements.urls.raw;
      });
      return rawUrls;
    });
    console.log(databaseCollectionsUrls);
    //   let databaseRaw = list.urls.map(elements => {
    //     return elements.urls.raw;
    //   });
    //   return databaseRaw;

    // let databaseCollectionsUrls2 = databaseCollectionsUrls.map(list => {
    //   return list[0].urls;
    //     let databaseRaw = list.urls.map(elements => {
    //       return elements.urls.raw;
    //     });
    //     return databaseRaw;
    // });
    // console.log(databaseCollectionsUrls2);

    let collection = this.props.collectionData.map((collection, index) => {
      collection.preview_photos.map(elements => {
        console.log(elements.urls.raw);
        return (
          <div
            className="driverDivs"
            key={index}
            style={{
              backgroundImage: `url(${collection.preview_photos.urls.raw})`,
              backgroundPosition: "center",
              backgroundSize: "250px 250px",
              backgroundRepeat: "no-repeat",
              position: "relative",
              textAlign: "center"
            }}
          >
            <div className="textContainer">
              <div className="text">
                <p>
                  <span className="description">Title: </span>
                  {collection.title}
                </p>
                <p>
                  <span className="description">Tags: </span>
                  {}
                </p>
              </div>
            </div>
          </div>
        );
      });
    });
    return (
      <div>
        <div>
          {/* <div className="edits">
            <Link to="/drivers/remove">
              <div className="editDivs3">
                <p>Remove</p>
              </div>
            </Link>
            <Link to="/drivers/update">
              <div className="editDivs2">
                <p>Update</p>
              </div>
            </Link>
            <Link to="/drivers/add">
              <div className="editDivs1">
                <p>Add</p>
              </div>
            </Link>
          </div> */}
          <p>{collection.title}</p>
          <div className="driverGrid">{collection}</div>
        </div>
      </div>
    );
  }
}

export default Collections;
