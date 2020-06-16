import {ipcRenderer} from 'electron';
import * as actionCreator from './actionType';
const listener = (e: any, data: any) => {
  return {
    type: actionCreator.ELECTRON_SERVICE,
    data,
  };
};

const request = (action: string, data: any) => {
  ipcRenderer.send(`${action}-request`, data);
  ipcRenderer.on(`${action}-response`, listener);
};

export {request}