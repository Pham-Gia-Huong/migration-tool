import {Migration} from 'migration-tool';

let migration = new Migration();

const migrateRecords = (arg: any) => {
  return migration
    .records((records) => ({app: arg.toId, records}), {app: arg.fromId})
    .from(arg.fromDomain, {apiToken: arg.tokenFrom})
    .to(arg.toDomain, {apiToken: arg.tokenTo})
    .run();
};

export {migrateRecords};
