import {Migration} from 'migration-tool';

const createRecordMigrate=()=>{
  
}

const parseRecordsFromTo = (records: any, fieldMapList: any) => {  
  let newRecords = JSON.parse(JSON.stringify(records));
  fieldMapList.map((fieldMap: any) => {
    newRecords = newRecords.map((record: any) => {
      let newRecord = JSON.parse(JSON.stringify(record));
      for (const key in record) {
        if (fieldMap.from === key) {
          newRecord[fieldMap.to] = record[key];
          continue;
        } else if (fieldMap.from !== key && fieldMap.type === record[key].type) {
          newRecord[fieldMap.to] = record[key];
          continue;
        }
        // newRecord[fieldMap.to] = record[key]
      }
      return newRecord;
    });
  });
  console.log("newRecords",newRecords);

  return newRecords;
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
