import {Migration} from 'migration-tool';

let migration = new Migration();

const migrateRecords = (data: any) => {
  return migration
    .records(
      (records) => {
        return {app: data.toApp, records};
      },
      {app: data.fromApp}
    )
    .from(data.fromDomain, {apiToken: data.tokenAppFrom})
    .to(data.toDomain, {apiToken: data.tokenAppTo})
    .run();
};

export {migrateRecords};
