import {MIGRATE_RECORDS} from './migration/type';
import {GET_FORM_FIELD} from './app/type';

import {migrateRecords} from './migration';
import {getFormMigrate} from './app';

const resultIpcMain = (event: Electron.IpcMainEvent, record: Promise<any>, log:any) => {
  record
    .then((data) => {      
      event.reply('response', {status: 'success', records: data, log});
    })
    .catch((error) => {
      event.reply('response', {status: 'fail', error: error.message, log});
    });
  return event;
};

const listener = (event: Electron.IpcMainEvent, arg: any) => {
  let record;
  let params={
    id:arg.data.id+1,
    fromDomain:arg.data.fromDomain,
    toDomain:arg.data.toDomain,
    from:arg.data.fromApp,
    to:arg.data.toApp,
    action:arg.type
  }
  switch (arg.type) {
    case MIGRATE_RECORDS: {
      record = migrateRecords(arg.data);
      break;
    }
    case GET_FORM_FIELD: {
      record = getFormMigrate(arg.data);
      break;
    }
  }

  return resultIpcMain(event, record, params);
};

export {listener};
