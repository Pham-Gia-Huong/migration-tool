import { MIGRATE_RECORDS } from "../../electronjs/service/migration/type";
import { request } from "../service";
import { addLog } from "./log";

const parseDataMigrateRecords = ({
  fromDomain,
  toDomain,
  fromApp,
  toApp,
  tokenAppFrom,
  tokenAppTo,
  query,
  fields,
  fieldMapFromTo,
  fieldMapList,
}: MigrateInfor) => {
  let fieldsList = [] as string[];
  if (typeof fields === "string" && fields) {
    fieldsList = fields.split(',');
  }
  return {
    fromDomain,
    toDomain,
    fromApp,
    toApp,
    tokenAppFrom,
    tokenAppTo,
    query,
    fields: fieldsList,
    fieldMapFromTo,
    fieldMapList
  };
};

const parseFieldMapFromTo = (fieldMapList: fieldMap[]) => {
  let fieldMapFromToList = JSON.parse(JSON.stringify(fieldMapList)) as fieldMap[];
  let fieldMapFromTo = fieldMapFromToList.map((fieldMap) => {
    return {
      from: fieldMap.from.value,
      to: fieldMap.to.value,
    } as {from: string; to: string};
  }) as {from: string; to: string}[];
  return fieldMapFromTo;
};

const isLoadMigrateRecords = (status: string) => {
  if (status === 'loading') {
    return true;
  }
  return false;
};

const handleMigrate= async (logList:Log[], jobList:job[],useMigration:MigrateHook)=>{
  let newJobList = JSON.parse(JSON.stringify(jobList))
  let newLogList= JSON.parse(JSON.stringify(logList));
  for (let i = 0; i < newJobList.length; i++) {
    const job = jobList[i];
    let log = await request(MIGRATE_RECORDS, job.migrateInfo, useMigration) as Log;
    addLog(newLogList,log);
  }
  return newLogList;
}

export {parseDataMigrateRecords,handleMigrate, isLoadMigrateRecords, parseFieldMapFromTo};
