import React from "react";
import { connect } from "react-redux";
import {
  deleteCollection,
  updateCollection
} from "../actions/photosAndCollections";
import CollectionTable from "../components/Collections/CollectionTable";
import CollectionRow from "../components/Collections/CollectionRow";

const Collection = ({ collections, onRemove, onUpdate }) => {
  return (
    <CollectionTable>
      {collections.map((d, i) => (
        <CollectionRow
          key={i}
          {...d}
          onClick={e => {
            e.preventDefault();
            onUpdate(i);
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
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
  // onRemove: id => dispatch(deleteCollection(id)),
  onUpdate: (id, update) => dispatch(updateCollection(id, update))
});

const CollectionDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

export default CollectionDisplay;
