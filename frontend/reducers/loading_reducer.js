// //int - actions
// import { RECEIVE_ALBUMS, LOADING_ALBUMS } from "../actions/album_actions";

// const initialState = {
//     albumsLoading: false,
//     artistLoading: false,
// };

// export default (state = initialState, action) => {
//     Object.freeze(state);

//     switch (action.type) {
//         case LOADING_ALBUMS:
//             return Object.assign({}, state, { albumsLoading: true });
//         case RECEIVE_ALBUMS:
//             return Object.assign({}, state, { albumsLoading: false });
//         default:
//             return state;
//     }
// };
