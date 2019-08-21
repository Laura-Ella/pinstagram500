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

let photos = [];
let collections = [];

var DEFAULT_STATE = {
  photos,
  collections
};

async function getData() {
  try {
    let res = await axios({
      url: searchUrl,
      method: "get",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.status === 200) {
      console.log(res.status);
    }
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

getData().then(res => {
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
console.log(photos);

// var photos = [
//   {
//     width: 7680,
//     height: 4320,
//     image:
//       "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3NDk1fQ",
//     alt_description: "Honest makeup palette",
//     likes: 30,
//     username: "honest",
//     tag: ""
//   },
//   {
//     width: 7680,
//     height: 4320,
//     image:
//       "https://images.unsplash.com/photo-1566241966316-befc8de1ec90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3NDk1fQ",
//     alt_description: "n/a",
//     likes: 1,
//     username: "gersonrepreza",
//     tag: ""
//   }
// ];

// var collections = [
//   {
//     title: "Mobile Only",
//     tag: "Earth",
//     image:
//       "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHUAqwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAD0QAAIBAgQEAwYFAgUDBQAAAAECAwQRAAUSIRMxQVEiYXEGFDKBkaEjQrHB8GLRFTOC4fEHUnIWJFNjk//EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAHBEBAAIDAQEBAAAAAAAAAAAAAAECERIhA0Ei/9oADAMBAAIRAxEAPwDYMraSZXXWe3TCuspIZL8SUjbewJNvTF81RrZtB6XuG/hwBUhp1PAkLEi1nIA+vPBEaT3ZQUXVJEDe7qbg+uD5a5ChKlpFt35Dub4ULDwF4usu+rxEDxDbly3GKoTxat5pGnWwDC1yvPbY7X8/TAN/f+GojnbhluTOLA+Rvy8jgRqyoJluynQLsnUjuDyI58j3xWwnZ7Q1IkjcEMs8K3C9RqFvPYjviVJGBE0ZiX8M7iM8x10n9v4QkKlqiGZS4bhNZCDdrnsO2xxapCLURjQZnQOo1WU9Ljy2v9MVtFpeWRRrEo1pa12PMDy+/LFqQyzx8eIOyG+tNgVa/Metht5nfAepUOYYKlgrfgrq8yAL/OwNvngP2fzD/EzUyyIBDFILX/MBz+l74GqasZcy07jVxJtEWskG9xcffl3BxXPMMpr6eOmjMdBVNZWDXUMbX++AY5q7rU1lJFvpQNubW3649yqqaaVNcKiNnKRsBcEfEd+3MfI4hm1UorgFi/ECKZSTYODfb5bn5DC7Lq1o8thIYcaGrijcPy0NsbHlt+wvzwDvPRLQpBU0gJ0syygnZuTXHrfE46xpaNJipV2s5BPcHf0/thbn9XK2YUeX8FpFku80Y2Jsw2vgzNqgUFdHBOyqjAOEU3LAD4f52OALq6hnIAUKQAqLyubra/8AO+JCrdHBuS1hueSDv8/+PP2kopAoeotxSC5Bv4Rz68zy7eovbFBjEoPEGrUd1NyT5Dy88AdT1LSgvGHY2v1LAevIc8U1D0ehuM5kv8UcZ3Hqb/ztikswcRlzwztaG9gPMk229fpito1pKnUXZI5DtcGzHla+2A0WSmjlRkReGrC2nf8AU/3xOsyyWkiMsN5I+duoGLcooVdS01iTyZGtYdvPD9aT8BkHIiwwGMSYMw1bkdO2DBIgG7EeVsBzwS0lc8UoHxX18h8sHo3hGlCw798AiZYLXlAuOttWBamRFVinjW3wgEfti2pHj8TG/le2F88yxk6Flka+4ReXzwANRNqKgqydg1j67jDXLbQhmOltRsRy1eXPCkDWDKE3PLU4DD5YGTOY0ThpUoSl9aybsOm/lgp3NojcK4ABuLOb6Ttbr+98WUFEqm8biJXYuskZKnfnz2N8Zyo9p8nZjBWT8J7bMy2U+W364LpfaLLaelWeGeXhA67oWAtfnYDAaTMKQPTOTWJoBvdmBN9uo5fTnhFTZ/JTZ7JTmrjlXUVZHOlrgXPLkfF5354Ih9sqSoCGFqjS6/EdUfhG1xpu1v6iRiM+YZa8aNPoihNmSVY2l4o3sEa2/U3Bba+AVf8AUSNJpMmkVG1TVkQJt4b3AuOx7/bDz2liX/04vJSrR6H6o2oD/Y4X+0Lw5jluXPTLFVpTVEUg0mwCg733ItboTY4JzOpir6R6QHZirBtV+RBHrgCmjJlgJKSOsNl1DY9L997j5LjO5RHUe7VDScSSlUoalLWIN7lgb22Bv2sDh5SSgyxzwqLINH4xsP8Ayt1AsNj6YXUHglmh4rh3laykm7dj9dO52NsAyrXkX2ypHCrJF7u8YksbkixN/qMV+3sEkef+zdUBxNUjJoH5jsbnoLbY8Z1krmq47JE4RkJN7nYH63tbywRn0q19ZltPGruUbUZFYgqo36d8A7zKpkpqcuRqaQDVp8JuRsASbD157fLEslpYKhXnqoYDP/8AEHBKD+rufmMATGmSVZZqmnpaj4UMs9nHa1wbdOVsXr7YZdGFgLSBCdMckUalJD1s3iAN+hse4wF+eMW03QKIyLcT/Ltt0BYn7Y9lgNVQsFJaSwtIVA5flFhf5fXCPN/bDIp34EmZyKVPjhkCm9uhsR37YGpfaeilkENLI019roh8I8hbf54B9k0+bU8zReHSDuHIuPvjdZYZmjDTSqT2F8YFY1rKP3imqhGOWplCgeuGuV11bBphZ4zf4WBup+Z3wGlzvLUrYdW6yLupGMqeNGShBuu2H7Vs4hvM0bADYqef3xXHXXQHSm/pgjAPW6TaWRdfWwsAMBzVRmbRHIXC7t0C/wC+DMykVFLcG3ZeX7YUrUvMLTIYVYW0RL2wEJ0Mw/8Aazqr2tpL/a2A0o/f5fd5kFoxpkbUNPrfn9cTkggqWJaKVQAQrMefpi3gsIeBI8PaNh4TbzG1zgovL/ZXKopTL7pDK5OpDIAfp/vjQy+z8FVQT01LCBG8ZVl52NtufLGUaOry6mdooEdjt+Gu7DyIJ39MNct9oJqdYpqtahYuVpV1Mg67kE/MeWAQ5XAgo3o54tBhbhzAgcrnc/T7HFVJkVXU5UxrJ5JGLyRRG1+HFqNgB0BsDt0sMaHNKVM4lObey88Pvd/xqd9i49Da30APyGFM/tPWZXTCE5ClPU3PxOVjB6Hl+5xrtExGfjzW87RadfrN5sa32Oq6cRVj1FOwGuCRiQB1C35Y0lZR8fLYc0ypm0OiSqo7dsfPM6lzLOKqSprZY5JRySLkPQY+lf8AR6X33I6mgnfUadjpBudKsL/3xnbGeN6RMR1Vl07yxhpSAT4Xsd9I5/cW+Z74vqqZ+KpRNMjsGeQb7k27222PyxbTU0kUT6EWQ69w63BF9ht/L4YI2kopYEkqQNO5Q33P1/nWOiihoKrMc2l1VA4FOv4rLex38Nv9I+2EjVeY59VTU2QtJDl6toEyEhpADzLdBz2xs85f3P2Azuph8Ms8jxxledjZftc4wPsDn9TkKS0kqUz07eICbUrAnnYgG/fHVcZ649NtfyNyL2JlLyvXPxJllYA3udN9jfzw9yDJ4M39uIxAL09En4r2FpWFrnzsbC/e+CKauzXOkaLLMsWnjluGnRCo37uR+gOHdBWZN7FUnu/GFTmcoGr3cch0Uf8AaL/UknfHdr8xDPzpbbaxtL7J5ZxNc1MjyM19BGoHz8vrjJ+0WU5fS1JFLDHTOliYUcfXbDCPOM0zGQ1KMsiv8EdyVQenfzwJXVpaWI1bFZhfW0IC7dL7/vjJuuyNSKVo5ooGDA/GwIYeW+2NHkklOkei4vfYcwfmDjLT0ZWlaR5ZZUbcCRr6fpgzLKWCIfgzlG5+L++A3mlWXSEHLkTfC6WwkYGOcEdo74qoqioiUa7SC+1iP1GGy1SsoJuCelsEfPZ42q3OvSkS89O7N69sVinhEhZgoHK2q9hgmfTHGAxKrewVebHCSv48bF1cDb4T2/bAXSyxmoQRyjSfyoQCR688C1FLE7l0JkYnSbAsRfue2B46liheQgajYEC1x5d/XHkV50JASKx2Jcn7AjBTDLqnhBoKgObG0bMxJUcrEk4Ingr4bknjxvYKY7gr3tY88C0tVSp4cwL6CNN41ZSB9d8e1ld7NU8NmzWoKLY6TIfofLAAvSoHkUwOKmN7ieKYq56eE3sdr7HzG+D8n9pakSNT5vHHUkDVHxYwpcf0kAc7nYjpgP3jJZoWkpJWjDklJFlLGQW7nftzPMDfFtBSPmChvEoG/EmjsL23N+gO24I5EX3wGk9oKLJcz9naifLoEWpQHTpTxK3Q2A38sY72RkXJs7mhNo3qKMEWvuykgn9/4MahZIMpy1qcS6rhrrHcBj0AB5DzvjKx0/uc8WZVDFWUFEB5aT8I3Hf64DS0WgSiEgNZgS1ue3ny549oo2jmZTFeNFuTIw3INrbeV/174DyeoPHusQYA325EY1FBV08lM9M1Nw0JJjRhpLE33vtbr98BlvaOshOXx0cgLR1dYoKxsBYAG49R2xrsh/w/KfZGmapphO0S6UIQanttfyJ32xjK+OGSqioXbxXYxXXVew5+XQ/LDzLZI67KIqOZT74hYKJG03PlbmORtzwCnPc+zGYsI3eji/IkcgFgRtcn57bcvXFeR5BUVVOkskcbTu2rUwvt6HlfncnrgmuyL/D5EmkjjvfZREzEdtr9+p+2Lo8vgqmSV8znIBFlWTwEj0+L9MA7bL5tHBAV7LeWRR07XW9vS2A3alnluqlI4xpuBcD52x6hgymicmrSocm+ki59fFhf7+rRMqBX1/lKAfdf7YAyskFVEEo4pFdT8SG2r5G4+mBqGPTJpKmGQbMrDSPp0/TDLJqIknSCh6l7b/PBdZBNC/48Qmh/77eJPn1GAIoU0xg6SjDnbrhitXYAaSfPbA1FGj04UHa23piJoiCQGkA7DBGUragUse3jma9rbn64RNrfwyF5nb4t9h1sMaf/AA+MHXMellthPmlVDTn3Wi08Ugl2vsi+fngEdQZfeWFNGvgHjYm4XHgaVZOIZQwFwAwHh7+nrhnTUs0kYWJXKg3OgfEe5PIYrq8rCgcephiPMJGeIxPS/Sw7X58+2ClwrBx9LsC4G92OwwdTzwyOD7sgPPiPe7fLAq5dRU26+9yO3XUsZPys2LEhm1rwqKRD/USzW/X6DAHRiMyiTiKzqfgEYI+Z523w3icxsskUMYITnGzXF+dr9D5D64BpaKWsWMgyQIG8Z4B1HbswB+ot64mcjymR0hpPa1oqx3usckqm/ddJF+h7dMA2c09TTaqhUikRrO7gFW8vFc3+mM9n1CanL5fDxAoLCy/Tpb0wymoc2p1qUYU+Y08C6oEiOnxdb7kYbQZc2e5HLROlRRzyi4J/IeffntgMb7OVDtPDShdRQ+O9wwHT1vjWtQxxlJSVDt4iXN2tv0v9MYKJ39n/AGgemz9pqeV3BjdLiKUXtcnp/N8bTMJaWhjkrJJoxFoJ1ljvtyG/6Y4m+G1PCbRmJLcziZ/aGDhxrJEoLWAvYm29/XGkpImpoJqqGQCQ2s176d99V/1wu9gcnqqw1GcZirQwMSaeB10k3BFzvi1IM6JHFSPLaXiNxyWvZbHfyv8Azy7ZTyV4kkqFbjvI6W2KHUp8uo/TGcrJKIVvCkgZuGNSoijYd7Xv9sNVpMqiDtlmfZhU1OjxFbyRXv8A+JUfTCQ5M5cTyCVQWuGaYaCe+6oPpfBBUbvXS6UR0UfCge/6gb4af4O7U3Hh1yFBcrfxEeXp2xbS0Jji0uzAnkZIT+q3+tsH5fPVQSFQFlA3/CcMW+XPARyXNI0IjmBB5aj++NSYYp0DBQb8jjNVNHBVv71Rm2r/ADI9PI9wOmGNBJNRIpQcSE7EX+H64AoUzU7M0dyv5kP7Y9MiE3O3kRgtm40Qkgbe26nAZMd/EN+uCMDmtdV1COKchEXnITYAdz2wsyeljcO/DerdmF3f4O/zAt1t6Yb5gutQkUOsjeNCLgHvbl8zfFKRCjp5JKyUSSyi2kHUFXt2H0wFrCSVwZpyYkWyxQi4v15WHltfE1o4I0aeSMEKPimfw3/02H1OK7yFTLBw4o2ChHbtfbf07YhmjokBIiNRJ/8AYNgPT/fBUYZJZU1pOIY2F7xFY7jzZB+kn0xCrjjjgL1LyOG5B9K3/wD1Jv66se1dQY9EcsrB9tojpt5avX1wvWqeeVlpxo0gbRCzG3nzwEkm9zQummlUtzLsSR38ZRT/AKflfB0OZQ5nA8VPQ5dUxA/FJHpdz33G3zwgMVMKV5Kt+IxJdljcD5s+9h6X9cLo8xqjXe5xFKejQAiOJdOrzO92PK1z88BvKKnp1nmlj99oZHSzGNyyfIDb7YdUtTwkRkrdW1l4osfPGLhqpkURU0pBiPiCmwv2/n/E5s3rYlQmnViBe4574A7/AKgLTe0OVmOaRBVQNqjdU1C4/K3kdhjM+yVHW5pXiozsn3enmVjADq4jJew52C8vXbFuYZvmFZEYGpnjFj8K33P8vgnJajMKZI1qEQkKw1DmDyH2AwxErFpjkPpT5glVEY/fUhZQCoVL2XtblhFUpToY5jVVFcLEg1LtEijfY4QZhn8tHEzWFym+nrtz9cUUtS2YuhqWLox8Audh2+ltvLBDUZg9S/4TU0MBNuGBpH+mTkfvzw7oKGPS0LIYmkF1NhZj31LpPbGMp4mo6meJbhdyezi3UdcarL6vhwo0dhcAgA+Fh/xgD6GWaItEj626r/mX9VNnP1bHkhglmDhTEebPH44z5Mh8Q9SLY6oCSTJOtgrdbdDz+YxF0n0lra2ja4V73HmpBva3Y4A1aaXwzJY6xe5bXGTtex5r3t9hgqN2YNYeID8SNj9x3H83xPK6hKiDUpIYjcg+IH121fPBE9KsgJl8L22kiG3zH9vtgA1lCyDhsUI6cgcEGbX4uEu/e2Fte0iMIZ47ofhkQg/TEAtSosIwwHJr2vghJUxcYlANEZ2Cj83qcL6oCJ7sNfIabbKOnrh7UARqx+2FxhGsMw25m3fAU1R42ZwUSm4iTW7dmPQd7D6XwNml3mip0IA4gZuwseZ8+f0wTRwt/iM8zG7yFrE9v+TiNQgNVITsFuzN/SBYfUk4KQ13EqKiQxsFUOAXPJR/ewJt3wPHOeG4gQqrAqATdmNxux+m3L92ZpJJ5AGQKlyQoFhz5fbE4stVZl2uFG/3N8BnqqM+7VCbgy+Jjsdthb9D/wAYhQUbmWPQSZjHbXb5A/Iaj6kY0DUHFlcaLp2GJR0yxQpFGwvI15pF6KPyg4BUwGrhq1oo9TyMG5r3/XFuWZqkkjJVqF0kcMAflGw+98ESUemjqXt45jpFhhNHQOamci4VFtfzwDg5nTBeNwm0Am/LlimpzFJYoDGh0Sb3J7Hf9sUUuXyTZTWJpJfmMWZPRGoy4wld4W8F+xH+2Aqr4WqYEeM6woAsOvW388x6k5MRHIEsDpA0gHli73aSllZwLp4Qydxg18vKn3unA1C2sW2Yfw/fAWyxFpyVFx0v1HP+fPBGXApG0F7tAPhPNluT9v3xfRRiXTIi8xcqeY9MGz0NpYqiAWde454DyimkppWjkUPTvuhPQdsN0ZQECm6bNGb2K/03wFDHG5KMLX3APQ+WDqePhLotqH5SeRHbAeRMIWE8TLpbZhyB9R06/TBsbvHIGUngveyk3t6HtgZ4DYvEfjHiQ8j/AL8sU0swjj0b8Im635oe2APnjWSMr8Vjvyup/fAQeUCwc/IDEnq0JuSA6/m5G3niozJfeLfyZrfY4IHlQS1B1ck2A/fA0yDUp7Xx2OwFQXRIGXncHFVVCDPw7+Gw2x2OwFskCK6qBzx5LTrqtc+eOx2ABrBqYIPCpHIel8eyU8axRqBbUQPljsdgI1ES6m/pFximho4mE9xc6gt++Ox2AKpKaOJ2Cja9v3xGhpI4KiREGxH2vjsdgDqmjjYSf1AX+gP74uo4U0upFxyx2OwFkVKkRZV5A3HlhrHCvBsd97g48x2ApradNIZfCw3BHS2KklZtF/zDHY7AXrUOluoa23nfFFddDxVNtS6ivQ47HYCurQFFboeh6fy+JJHqUEHa2wIvbHY7Af/Z"
//   }
// ];

// var DEFAULT_STATE = {
//   photos,
//   collections
// };

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
