// reducers.js
const initialState = {
  isValidated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_VALIDATED":
      return {
        ...state,
        isValidated: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
