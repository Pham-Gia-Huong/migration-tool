import {ipcRenderer} from 'electron';
const listener = (e: any, data: any, migrateRecords: (data: migrateRecords) => void) => {
  migrateRecords({
    status: data.status,
    records: data.records,
  });
};

const request = (type: string, data: any, migrateRecords: (data: migrateRecords) => void) => {
  ipcRenderer.send(`${type}-request`, data);
  ipcRenderer.on(`${type}-response`, (e, dataResponse) => listener(e, dataResponse, migrateRecords));
};

export {request};
