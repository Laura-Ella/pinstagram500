import {
  CREATE_PHOTO,
  UPDATE_PHOTO,
  DELETE_PHOTO,
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION
} from "../constants/photosAndCollections";
import axios from "axios";

const searchUrl = "https://pinstagram500-api.herokuapp.com/";
const searchUrlCollection =
  "https://pinstagram500-api.herokuapp.com/collection";

let photos = [];
let collections = [];

var DEFAULT_STATE = {
  photos,
  collections
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
  // console.log(databaseCollections[0].urls[0].urls.raw);
  let databaseCollectionsUrls = databaseCollections.map(list => {
    let databaseRaw = list.urls.map(elements => {
      return elements.urls.raw;
    });
    return databaseRaw;
  });
  // for (let i = 0; i < databaseCollections.length; i++) {
  //   collections.push(databaseCollections[i]);
  // }
  // console.log(collections);

  for (let i = 0; i < databaseCollectionsUrls.length; i++) {
    collections.push({
      urls: databaseCollectionsUrls[i]
    });
  }
  console.log(collections);

  // let databaseCollectionsRaw = databaseCollectionsUrls[0].map(list => {
  //   return list.urls.raw;
  // });
  // console.log(databaseCollectionsRaw);

  // let databaseCollectionsRaw = databaseCollectionsUrls.map(list => {
  //   return list.raw;
  // });
  // console.log(databaseCollectionsRaw);
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

        collections: [...state.collections, action.payload.updatedPhoto]
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter((photo, id) => {
          return id !== action.payload;
        })
      };
    // case CREATE_COLLECTION:
    //   return {
    //     ...state,
    //     collections: [...state.collections, action.payload]
    //   };
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
        })
      };
    case DELETE_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter((collection, id) => {
          return id !== action.payload;
        })
      };
    default:
      return state;
  }
}
