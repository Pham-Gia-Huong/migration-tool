import {Migration} from 'migration-tool';

const parseRecordsFromTo = (records: any, fieldMapList: any) => {
  let newRecords = JSON.parse(JSON.stringify(records));
  let listMigrate = [] as any;
  newRecords.map((record: any) => {
    let currentRecord = {} as any;
    fieldMapList.map((fieldMap: any) => {
      currentRecord[fieldMap.to] = {
        type: fieldMap.type,
        value: record[fieldMap.from].value,
      };
    });
    listMigrate.push(currentRecord);
    return record;
  });

  return listMigrate;
};

const migrateRecords = (data: any) => {
  let migration = new Migration();
  return migration
    .records(
      (records) => {
        let newRecords = parseRecordsFromTo(records, data.fieldMapFromTo);
        return {app: Number(data.toApp), records: newRecords};
      },
      {app: Number(data.fromApp), fields: data.fields, query: data.query}
    )
    .from(data.fromDomain, {apiToken: data.tokenAppFrom})
    .to(data.toDomain, {apiToken: data.tokenAppTo})
    .run();
};

export {migrateRecords};
