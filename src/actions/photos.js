import {
  CREATE_PHOTO,
  UPDATE_PHOTO,
  DELETE_PHOTO,
  CREATE_COLLECTION
} from "../constants/photos";

export function createNewPhoto(image) {
  return {
    type: CREATE_PHOTO,
    payload: {
      // name,
      // birthplace,
      // team,
      // rank,
      image
    }
  };
}

export const deletePhoto = id => ({ type: DELETE_PHOTO, payload: id });

export const updatePhoto = (id, updatedPHOTO) => ({
  type: UPDATE_PHOTO,
  payload: {
    id,
    updatedPHOTO
  }
});

export function createNewCollection(image) {
  return {
    type: CREATE_COLLECTION,
    payload: {
      // name,
      // birthplace,
      // team,
      // rank,
      image
    }
  };
}
