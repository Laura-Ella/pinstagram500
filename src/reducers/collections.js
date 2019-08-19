import {
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION
} from "../constants/collections";
import axios from "axios";
// const searchUrl = "https://f1-mern-app-api.herokuapp.com";

// let collections = [];

// var DEFAULT_STATE = {
//   collections
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
//   let collections2 = res.map(list => {
//     let x = {
//       name: list.name,
//       birthplace: list.birthplace,
//       team: list.team,
//       rank: list.rank,
//       image: list.image
//     };
//     return x;
//   });
//   for (let i = 0; i < collections2.length; i++) {
//     collections.push(racers2[i]);
//   }
// });

var collections = [
  {
    width: 7680,
    height: 4320,
    image:
      "https://images.unsplash.com/collection-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3NDk1fQ",
    alt_description: "Honest makeup palette",
    likes: 30,
    username: "honest"
  },
  {
    width: 7680,
    height: 4320,
    image:
      "https://images.unsplash.com/collection-1566241966316-befc8de1ec90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3NDk1fQ",
    alt_description: "n/a",
    likes: 1,
    username: "gersonrepreza"
  }
];

var DEFAULT_STATE = {
  collections
};

export default function collectionReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
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
            ...action.payload.updatedcollection
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
