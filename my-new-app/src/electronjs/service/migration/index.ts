import {Migration} from 'migration-tool';

const parseRecordsFromTo = (records: any, fieldMapList: any) => {
  let newRecord = JSON.parse(JSON.stringify(records));
  newRecord.map((record) => {
    for (const key in record) {
      fieldMapList.forEach((fieldMap) => {
        if (fieldMap.from === key) {
          record[fieldMap.to] = record[key];
          delete record[key];
        }
      });
    }
    return record;
  });
  return newRecord;
};

const migrateRecords = (data: any) => {
  console.log("data",data);
  
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
