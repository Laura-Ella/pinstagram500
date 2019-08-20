import {
  CREATE_PHOTO,
  UPDATE_PHOTO,
  DELETE_PHOTO,
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION
} from "../constants/photosAndCollections";

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

export const deleteCollection = id => ({
  type: DELETE_COLLECTION,
  payload: id
});

export const updateCollection = (id, updatedCOLLECTION) => ({
  type: UPDATE_COLLECTION,
  payload: {
    id,
    updatedCOLLECTION
  }
});
