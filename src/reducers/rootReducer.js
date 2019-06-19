const initialState = {
  counter: 0,
  navopen: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'TOGGLE_MENU':
      return { ...state, navopen: !state.navopen };
    default:
      return state;
  }
}

export default rootReducer;
