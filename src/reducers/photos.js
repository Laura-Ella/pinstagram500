import { CREATE_PHOTO, UPDATE_PHOTO, DELETE_PHOTO } from "../constants/photos";
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

var DEFAULT_STATE = {
  photos: []
};

export default function photoReducer(state = DEFAULT_STATE, action) {
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
    default:
      return state;
  }
}
