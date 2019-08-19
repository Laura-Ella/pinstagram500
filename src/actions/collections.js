import {
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION
} from "../constants/collections";

export function createNewCollection(image) {
  return {
    type: CREATE_COLLECTION,
    payload: {
      // name,
      // birthplace,s
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
