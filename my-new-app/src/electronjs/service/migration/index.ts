import {ipcMain} from 'electron';
import {RECORDS} from './type';
import {migrateRecords} from './action';

const resultIpcMain = (event: Electron.IpcMainEvent, record: Promise<any>) => {  
  record
    .then((data) => event.reply('migrate-response-success', {status: 'success', records:data}))
    .catch((error) => event.reply('migrate-response-fail', {status: 'fail', error}));
    return event;
};

const listener = (event: Electron.IpcMainEvent, arg: any) => {  
  let record;  
  switch (arg.type) {
    case RECORDS: {
      record = migrateRecords(arg.data);
      break;
    }
  }

  return resultIpcMain(event, record);
}

ipcMain.on('migrate-request', listener);
