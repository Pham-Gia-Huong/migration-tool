import {Migration} from '../../../../node_modules/migration-tool/dist';

const migrateRecords = (data: any) => {  
  let migration = new Migration();
  let newData= JSON.parse(JSON.stringify(data))
  newData.toApp=Number(newData.toApp)
  newData.fromApp=Number(newData.fromApp)  
  return migration
    .records(
      (records) => {                
        return {app: Number(newData.toApp), records};
      },
      {app: Number(newData.fromApp)}
    )
    .from(newData.fromDomain, {apiToken: newData.tokenAppFrom})
    .to(newData.toDomain, {apiToken: newData.tokenAppTo})
    .run();
};

export {migrateRecords};
