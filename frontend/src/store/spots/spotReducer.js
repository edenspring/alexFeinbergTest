import {
  LOAD_ALL_SPOTS,
  LOAD_ALL_SPOTS_USER,
  LOAD_SPOT,
  ADD_SPOT,
  ADD_SPOT_IMAGE,
  UPDATE_SPOT,
  DELETE_SPOT,
  DELETE_SPOT_IMAGE,
} from "./spotAction";
const initialState = {
  spots: {},
};

const spotReducer = (state = initialState, action) => {
  console.log("ACTION ", action);
  let spots;
  switch (action.type) {
    case LOAD_ALL_SPOTS:
      console.log(" LOAD ALL STATE ", state);
      spots = { ...state.spots };
      action.spots["Spots"].forEach((spot) => (spots[spot.id] = spot));
      console.log("LOAD ALL SPOTS ", spots);
      return { ...spots };
    case LOAD_SPOT:
      console.log("STATE ", state);
      spots = { ...state.spots, [action.spot.id]: action.spot };
      console.log("LOAD SPOT ", spots);
      return { ...state, ...spots };
    case LOAD_ALL_SPOTS_USER:
      const userSpots = {};
      spots = { ...state.spots, userSpots: {} };
      action.spots.forEach((spot) => (spots["userSpots"][spot.id] = spot));
      return { ...state, ...spots };
    case ADD_SPOT:
      console.log("STATE ", state);
      spots = { ...state.spots, [action.spot.id]: action.spot };
      return { ...state, ...spots };
    case DELETE_SPOT:
      spots = { ...state };
      delete spots[action.spot.id];
      return spots;
    case UPDATE_SPOT:
      spots = { ...state, [action.spot.id]: action.spot };
      return { ...spots };

    default:
      return state;
  }
};

export default spotReducer;
