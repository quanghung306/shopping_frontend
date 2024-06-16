const initialState = {
    IsAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        IsAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        IsAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
export default authReducer;
