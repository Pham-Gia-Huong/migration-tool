import {RECORDS} from './migration/type';
import {GET_FORM_FIELD} from './app/type';

import {migrateRecords} from './migration';
import {getFormMigrate} from './app';

const resultIpcMain = (event: Electron.IpcMainEvent, record: Promise<any>) => {
  record
    .then((data) => {
      event.reply('response', {status: 'success', records: data});
    })
    .catch((error) => {
      event.reply('response', {status: 'fail', error: error.message});
    });
  return event;
};

const listener = (event: Electron.IpcMainEvent, arg: any) => {
  let record;
  switch (arg.type) {
    case RECORDS: {
      record = migrateRecords(arg.data);
      break;
    }
    case GET_FORM_FIELD: {
      record = getFormMigrate(arg.data);
      break;
    }
  }

  return resultIpcMain(event, record);
};

export {listener};
