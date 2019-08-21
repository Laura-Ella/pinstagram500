import {
  CREATE_PHOTO,
  UPDATE_PHOTO,
  DELETE_PHOTO,
  UPDATE_COLLECTION,
  DELETE_COLLECTION,
  UPDATE_FAVORITE,
  DELETE_FAVORITE
} from "../constants/photosAndCollections";
import axios from "axios";

const searchUrl = "https://pinstagram500-api.herokuapp.com/";
const searchUrlCollection =
  "https://pinstagram500-api.herokuapp.com/collection";

let photos = [];
let collections = [];
let favorites = [];

var DEFAULT_STATE = {
  photos,
  collections,
  favorites
};

async function getDataPhotos() {
  try {
    let res = await axios({
      url: searchUrl,
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

getDataPhotos().then(res => {
  let photos2 = res.map(list => {
    let x = {
      id: list._id,
      username: list.username,
      width: list.width,
      height: list.height,
      description: list.description,
      url: list.url,
      tag: list.tag
    };
    return x;
  });
  for (let i = 0; i < photos2.length; i++) {
    photos.push(photos2[i]);
  }
});

async function getDataCollections() {
  try {
    let res = await axios({
      url: searchUrlCollection,
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

getDataCollections().then(res => {
  let databaseCollections = res.map(list => {
    let x = {
      title: list.title,
      tags: list.tags,
      urls: list.preview_photos
    };
    return x;
  });

  let databaseCollectionsTitle = databaseCollections.map(list => {
    return list.title;
  });

  let databaseCollectionsUrls = databaseCollections.map(list => {
    let databaseRaw = list.urls.map(elements => {
      return elements.urls.raw;
    });
    return databaseRaw;
  });

  let databaseCollectionsTags = databaseCollections.map(list => {
    let databaseTags = list.tags.map(elements => {
      return elements.title;
    });
    return databaseTags;
  });
  for (let i = 0; i < databaseCollections.length; i++) {
    collections.push({
      title: databaseCollectionsTitle[i],
      tags: databaseCollectionsTags[i],
      url: databaseCollectionsUrls[i]
    });
  }
});

export default function photoAndCollectionsReducer(
  state = DEFAULT_STATE,
  action
) {
  switch (action.type) {
    case CREATE_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.payload]
      };
    case UPDATE_PHOTO:
      return {
        ...state,
        photos: state.photos.map((photo, index) => {
          if (index !== action.payload.id) {
            return photo;
          }
          return {
            ...photo,
            ...action.payload.updatedPhoto
          };
        }),
        favorites: [...state.favorites, action.payload.updatedPhoto]
      };
    case DELETE_PHOTO:
      axios
        .delete(`${searchUrl}${action.payload}`, action.payload)
        .then(response => {
          // console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
      return {
        ...state,
        photos: state.photos.filter((photo, id) => {
          return id !== action.payload;
        })
      };
    case UPDATE_COLLECTION:
      return {
        ...state,
        collections: state.collections.map((collection, index) => {
          if (index !== action.payload.id) {
            return collection;
          }
          return {
            ...collection,
            ...action.payload.updatedCollection
          };
        }),
        favorites: [...state.favorites, action.payload.updatedCollection]
      };
    case DELETE_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter((collection, id) => {
          return id !== action.payload;
        })
      };
    case UPDATE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.map((favorite, index) => {
          if (index !== action.payload.id) {
            return favorite;
          }
          return {
            ...favorite,
            ...action.payload.updatedfavorite
          };
        })
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((favorite, id) => {
          return id !== action.payload;
        })
      };
    default:
      return state;
  }
}
