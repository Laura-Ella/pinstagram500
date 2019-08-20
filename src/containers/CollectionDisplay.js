import React from "react";
import { connect } from "react-redux";
import {
  deleteCollection,
  updateCollection
} from "../actions/photosAndCollections";
import PhotoTable from "../components/Photos/PhotoTable";
import PhotoRow from "../components/Photos/PhotoRow";

const Photos = ({ collections, onRemove, onUpdate }) => {
  return (
    <PhotoTable>
      {collections.map((d, i) => (
        <PhotoRow
          key={i}
          {...d}
          onClick={e => {
            e.preventDefault();
            onRemove(i);
          }}
          onChange={e => {
            e.preventDefault();
            onUpdate(i, { [e.target.name]: e.target.value });
          }}
        />
      ))}
    </PhotoTable>
  );
};

const mapStateToProps = state => ({
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteCollection(id)),
  onUpdate: (id, update) => dispatch(updateCollection(id, update))
});

const PhotoDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);

export default PhotoDisplay;
