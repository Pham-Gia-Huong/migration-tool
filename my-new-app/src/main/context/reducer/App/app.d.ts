interface Item {
  label: string;
  value: string;
}
interface fieldMap {
  fieldCodeToList: Item[];
  fieldCodeFromList: Item[];
  from: Item;
  to: Item;
  id: number;
  [key: string]: string;
}

interface formField {
  isLoading?: boolean;
  records: fieldMap[];
  status: string;
  error: string;
}
declare type StateApp = formField;

interface formFieldAction {
  type:
    | typeof import('../base/actionType').REQUEST
    | typeof import('./actionType').GET_FORM_SUCCESS
    | typeof import('./actionType').GET_FORM_FAIL
    | typeof import('../base/actionType').CLEAR_ERROR;

  data?: StateApp;
}

interface updateFieldMap {
  type: typeof import('./actionType').UPDATE_FIELD_MAP;
  data?: {
    records: fieldMap[];
  };
}

declare type ActionApp = formFieldAction | updateFieldMap;
