const AppReducer = (state, action) => {
  switch (action.type) {
    case "addTransition":
      return {
        ...state,
        transition: [...state.transition, action.payload],
      };
    case "deleteTransition":
      return {
        ...state,
        transition: state.transition.filter(
          (trans) => trans.id !== action.payload
        ),
      };

    default:
      break;
  }
};

export default AppReducer;
