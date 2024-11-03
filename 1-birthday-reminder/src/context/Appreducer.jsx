const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATE":
      return [...state, action.payload];
    case "DELETE_DATE":
      return state.filter((data) => {
        return data.id !== action.payload;
      });
    default:
      return state;
  }
};

export default AppReducer;
