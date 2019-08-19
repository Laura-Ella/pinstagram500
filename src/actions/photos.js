import { CREATE_PHOTO, UPDATE_PHOTO, DELETE_PHOTO } from "../constants/photos";

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
