import {ipcMain} from 'electron';
import {RECORDS} from './type';
import {migrateRecords} from './action';

const resultIpcMain = (event: Electron.IpcMainEvent, record: Promise<any>) => {
  record
    .then((data) => event.reply('migrate-response', {status: 'fail', data}))
    .catch((error) => event.reply('migrate-response', {status: 'fail', error}));
};

ipcMain.on('migrate-request', (event: Electron.IpcMainEvent, type: string, arg: any) => {
  let record;
  switch (type) {
    case RECORDS: {
      record = migrateRecords(arg);
    }
  }

  return resultIpcMain(event, record);
});
