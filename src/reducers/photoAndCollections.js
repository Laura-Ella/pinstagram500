import {
  CREATE_PHOTO,
  UPDATE_PHOTO,
  DELETE_PHOTO,
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION
} from "../constants/photosAndCollections";
import axios from "axios";

// const searchUrl = "https://f1-mern-app-api.herokuapp.com";

// let photos = [];

// var DEFAULT_STATE = {
//   photos
// };

// async function getData() {
//   try {
//     let res = await axios({
//       url: searchUrl,
//       method: "get",
//       timeout: 1000,
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     if (res.status === 200) {
//       console.log(res.status);
//     }
//     return res.data;
//   } catch (err) {
//     console.error(err);
//   }
// }

// getData().then(res => {
//   let photos2 = res.map(list => {
//     let x = {
//       name: list.name,
//       birthplace: list.birthplace,
//       team: list.team,
//       rank: list.rank,
//       image: list.image
//     };
//     return x;
//   });
//   for (let i = 0; i < photos2.length; i++) {
//     photos.push(racers2[i]);
//   }
// });

var photos = [
  {
    width: 7680,
    height: 4320,
    image:
      "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3NDk1fQ",
    alt_description: "Honest makeup palette",
    likes: 30,
    username: "honest"
  },
  {
    width: 7680,
    height: 4320,
    image:
      "https://images.unsplash.com/photo-1566241966316-befc8de1ec90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3NDk1fQ",
    alt_description: "n/a",
    likes: 1,
    username: "gersonrepreza"
  }
];

var collections = [
  {
    width: 7680,
    height: 4320,
    image:
      "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3NDk1fQ",
    alt_description: "Honest makeup palette",
    likes: 30,
    username: "honest"
  }
];

var DEFAULT_STATE = {
  photos,
  collections
};

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
            ...action.payload.updatedphoto
          };
        })
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter((photo, id) => {
          return id !== action.payload;
        })
      };
    case CREATE_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.payload]
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
            ...action.payload.updatedphoto
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
