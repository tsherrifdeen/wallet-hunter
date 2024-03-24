// reducers.js
const initialState = {
  isValidated: false,
  licenseKey: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_VALIDATED":
      return {
        ...state,
        isValidated: action.payload,
      };
    case "SET_LICENSE_KEY":
      return {
        ...state,
        licenseKey: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
