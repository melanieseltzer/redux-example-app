import { ADD_USER } from '../actions/types';

const initialState = {
  names: []
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch(action.type) {
    case ADD_USER:
      return [...state.users.names, payload];
    default:
      return state;
  }
};
