import React from "react";
import { connect } from "react-redux";
import { deleteCollection, updateCollection } from "../actions/collections";
import CollectionTable from "../components/Collections/CollectionTable";
import CollectionRow from "../components/Collections/CollectionRow";

const Photos = ({ photos, onRemove, onUpdate }) => {
  return (
    <CollectionTable>
      {photos.map((d, i) => (
        <CollectionRow
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
    </CollectionTable>
  );
};

const mapStateToProps = state => ({
  photos: state.photos
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
