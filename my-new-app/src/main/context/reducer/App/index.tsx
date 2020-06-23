import * as actionType from './actionType';
import * as actionBase from '../base/actionType';

export default (state: StateApp, action: ActionApp) => {
  switch (action.type) {
    case actionBase.REQUEST:{
      let newAction = action.data;
      let status = newAction.status;
      let records = newAction.records;
      let isLoading = newAction.isLoading;
      let error = newAction.error;
      return {...state, status, records, isLoading,error};
    }
     case actionType.UPDATE_FIELD_MAP:{
      let newAction = action.data;
      let records = newAction.records;
      return {...state, records};
    }
    case actionType.GET_FORM_SUCCESS:
      let data = action.data;
      
      let isLoading = data.isLoading;
      let status = data.status;
      let records = data.records;

      return {...state, isLoading, status, records};

    case actionType.GET_FORM_FAIL: {
      let data = action.data;
      let isLoading = data.isLoading;
      let status = data.status;
      let error = data.error;
      return {...state, isLoading, status, error};
    }
    case actionBase.CLEAR_ERROR: {
      let status = '';
      return {...state, status};
    }
    default:
      return state;
  }
};
