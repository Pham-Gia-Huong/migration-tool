import {ipcRenderer} from 'electron';
import * as migrationType from '../../electronjs/service/migration/type';
import * as appType from '../../electronjs/service/app/type';

import {saveRecodsMigrate} from './electron';
import {getFormField} from './app/index';

const listener = (e: any, data: any, dispatch: any, type: string,resolve:any) => {  
  switch (type) {
    case migrationType.MIGRATE_RECORDS:
      saveRecodsMigrate(data, dispatch,resolve);
      break;
    case appType.GET_FORM_FIELD:
      getFormField(data, dispatch,resolve);
    default:
      break;
  }
};

const request = (type: string, data: any, dispatch: any) => {
  dispatch.request();
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      ipcRenderer.send(`request`, {data, type});
      ipcRenderer.once(`response`, (e, dataResponse) => {
        listener(e, dataResponse, dispatch, type,resolve)
      });
    }, 1500);
  })
  
};
export {request};
