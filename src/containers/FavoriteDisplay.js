import React from "react";
import { connect } from "react-redux";
import {
  deleteFavorite,
  updateFavorite
} from "../actions/photosAndCollections";
import FavoriteTable from "../components/Favorites/FavoriteTable";
import FavoriteRow from "../components/Favorites/FavoriteRow";

const Favorite = ({ favorites, onRemove, onUpdate }) => {
  return (
    <FavoriteTable>
      {favorites.map((d, i) => (
        <FavoriteRow
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
    </FavoriteTable>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteFavorite(id)),
  onUpdate: (id, update) => dispatch(updateFavorite(id, update))
});

const FavoriteDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);

export default FavoriteDisplay;
