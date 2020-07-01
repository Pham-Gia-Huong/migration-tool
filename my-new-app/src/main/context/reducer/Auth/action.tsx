// @ts-nocheck

import * as actionCreator from './actionType';
const login = ({domain, auth}: Authentication): ActionAuth => ({
  type: actionCreator.LOGIN,
  data: {
    domain,
    auth,
  },
});

export {login};
