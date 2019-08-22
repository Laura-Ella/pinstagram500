import React from "react";
import { connect } from "react-redux";
import { deletePhoto, updatePhoto } from "../actions/photosAndCollections";
import PhotoTable from "../components/Photos/PhotoTable";
import PhotoRow from "../components/Photos/PhotoRow";

const Photos = ({ photos, onRemove, onUpdate }) => {
  return (
    <PhotoTable>
      {photos.map((d, i) => (
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
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  onRemove: _id => dispatch(deletePhoto(_id)),
  onUpdate: (id, update) => dispatch(updatePhoto(id, update))
});

const PhotoDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);

export default PhotoDisplay;
