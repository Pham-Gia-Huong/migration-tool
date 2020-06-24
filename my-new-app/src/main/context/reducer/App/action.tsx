import * as actionCreator from './actionType';

const getFormSuccess = (data: formField): ActionApp => ({
  type: actionCreator.GET_FORM_SUCCESS,
  data: {
    isLoading: false,
    records: data.records,
    status: data.status,
    error: '',
  },
});

const updateFieldMap = (data: any): ActionApp => ({
  type: actionCreator.UPDATE_FIELD_MAP,
  data: {
    records: data,
  },
});

const getFormFail = (data: formField): ActionApp => ({
  type: actionCreator.GET_FORM_FAIL,
  data: {
    isLoading: false,
    error: data.error,
    records: [],
    status: data.status,
  },
});

const clearAllFieldMap = (): ActionApp => {
  return {
    type: actionCreator.CLEAR_ALL_FIELD_MAP,
    data: {
      records: [],
    },
  };
};

export {getFormSuccess, getFormFail, updateFieldMap,clearAllFieldMap};
