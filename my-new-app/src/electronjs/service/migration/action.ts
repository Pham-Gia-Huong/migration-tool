import {Migration} from '../../../../node_modules/migration-tool/dist';

const migrateRecords = (data: any) => {
  let migration = new Migration();
  return migration
    .records(
      (records) => {        
        return {app: Number(data.toApp), records};
      },
      {app: Number(data.fromApp), fields: data.fields, query: data.query}
    )
    .from(data.fromDomain, {apiToken: data.tokenAppFrom})
    .to(data.toDomain, {apiToken: data.tokenAppTo})
    .run();
};

export {migrateRecords};
