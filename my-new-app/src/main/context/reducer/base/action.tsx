import {REQUEST, CLEAR_ERROR} from './actionType';
const request = (): any => {
  return {
    type: REQUEST,
    data: {
      status: '',
      records: [],
      isLoading: true,
      error: '',
    },
  };
};

const clearError = ():any => {
  return {type: CLEAR_ERROR};
};

export {request, clearError};
