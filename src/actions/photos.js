import { CREATE_PHOTO, UPDATE_PHOTO, DELETE_PHOTO } from "../constants/photos";

export function createNewPHOTO(name, birthplace, team, rank, image) {
  return {
    type: CREATE_PHOTO,
    payload: {
      name,
      birthplace,
      team,
      rank,
      image
    }
  };
}

export const deletePHOTO = id => ({ type: DELETE_PHOTO, payload: id });

export const updatePHOTO = (id, updatedPHOTO) => ({
  type: UPDATE_PHOTO,
  payload: {
    id,
    updatedPHOTO
  }
});
