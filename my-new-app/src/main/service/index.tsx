import {ipcRenderer} from 'electron';
import * as migrationType from '../../electronjs/service/migration/type';
import * as appType from '../../electronjs/service/app/type';

import {saveRecodsMigrate} from './electron';
import {getFormField} from './app/index';

const listener = (e: any, data: any, dispatch: any, type: string) => {
  console.log("listener",data);
  
  switch (type) {
    case migrationType.RECORDS:
      saveRecodsMigrate(data, dispatch);
      break;
    case appType.GET_FORM_FIELD:
      getFormField(data, dispatch);
    default:
      break;
  }
};

const request = (type: string, data: any, dispatch: any) => {
  dispatch.request();
  setTimeout(() => {
    ipcRenderer.send(`request`, {data, type});
    ipcRenderer.once(`response`, (e, dataResponse) => listener(e, dataResponse, dispatch, type));
  }, 1500);
};
export {request};
