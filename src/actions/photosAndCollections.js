import {
  CREATE_PHOTO,
  UPDATE_PHOTO,
  DELETE_PHOTO,
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION,
  CREATE_FAVORITE,
  UPDATE_FAVORITE,
  DELETE_FAVORITE
} from "../constants/photosAndCollections";

export function createNewPhoto(url) {
  return {
    type: CREATE_PHOTO,
    payload: {
      url
    }
  };
}

export const deletePhoto = id => ({ type: DELETE_PHOTO, payload: id });

export const updatePhoto = (id, updatedPhoto) => ({
  type: UPDATE_PHOTO,
  payload: {
    id,
    updatedPhoto
  }
});

export function createNewCollection(image, tag) {
  return {
    type: CREATE_COLLECTION,
    payload: {
      // name,
      // birthplace,
      // team,
      // rank,
      image,
      tag
    }
  };
}

export const deleteCollection = id => ({
  type: DELETE_COLLECTION,
  payload: id
});

export const updateCollection = (id, updatedCollection) => ({
  type: UPDATE_COLLECTION,
  payload: {
    id,
    updatedCollection
  }
});

export function createNewFavorite(image, tag) {
  return {
    type: CREATE_FAVORITE,
    payload: {
      image
      // tag
    }
  };
}

export const deleteFavorite = id => ({
  type: DELETE_FAVORITE,
  payload: id
});

export const updateFavorite = (id, updatedFavorite) => ({
  type: UPDATE_FAVORITE,
  payload: {
    id,
    updatedFavorite
  }
});
