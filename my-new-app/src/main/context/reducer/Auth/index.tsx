import * as actionCreator from './actionType';

export default (state: StateAuth, action: ActionAuth) => {
  switch (action.type) {
    case actionCreator.LOGIN:
      let domain = action.data.domain;
      let auth = action.data.auth;
      return {...state, domain, auth};
    default:
      return state;
  }
};
