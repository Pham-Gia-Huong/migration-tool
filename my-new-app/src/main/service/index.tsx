import {ipcRenderer} from 'electron';

const listener = (e: any, data: any, migrateRecords:{RecordsFail:(data:migrateRecordsFail)=>void, RecordsRequest:()=>void,RecordsSuccess:(data:migrateRecordsSuccess)=>void}) => { 
  if(!data.error){
    migrateRecords.RecordsSuccess({
      status: data.status,
      records: data.records,
    });
    return;
  }
  migrateRecords.RecordsFail({
    status: data.status,
    error: data.error.message
  })
};

const request = (type: string, data: any,migrateRecords:{RecordsFail:(data:migrateRecordsFail)=>void, RecordsRequest:()=>void,RecordsSuccess:(data:migrateRecordsSuccess)=>void}) => {
  migrateRecords.RecordsRequest()
  ipcRenderer.send(`${type}-request`, data);
  ipcRenderer.once(`${type}-response`, (e, dataResponse) => listener(e, dataResponse,  migrateRecords));
  ipcRenderer.once(`${type}-response`, (e, dataResponse) => listener(e, dataResponse,  migrateRecords));

};
export {request}
