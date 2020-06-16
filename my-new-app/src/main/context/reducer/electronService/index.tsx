import {ELECTRON_SERVICE} from './actionType';

export default (state, action) => {
  switch (action.type) {
    case ELECTRON_SERVICE:
      let newState = JSON.parse(JSON.stringify(state));
      return newState;
    default:
      return state;
  }
};
