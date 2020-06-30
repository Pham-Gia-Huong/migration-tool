import {createFieldMapList} from '../../features/app';
import {GET_FORM_FIELD} from '../../../electronjs/service/app/type';
import {request} from '../../service';
import {parseDataMigrateRecords} from '../../features/migration';
import {updateLog} from '../log';

const getFormField = (data: any, dispatch: any, resolve: any) => {
  let newLog = {...data.log};
  newLog.message = data.error || data.status;
  if (data.records) {
    const fieldMapList = createFieldMapList(data);
    dispatch.getFormSuccess({
      records: fieldMapList,
      status: data.status,
    });
    resolve(newLog);
    return;
  }
  dispatch.getFormFail({
    status: data.status,
    error: data.error,
  });
  resolve(newLog);
};

const processGetForm = async ({fromApp, fromDomain, toApp, toDomain, tokenAppFrom, tokenAppTo}: InforAuth, {appUse}: any) => {
  let formFieldMigrate = parseDataMigrateRecords({
    fromApp,
    fromDomain,
    toApp,
    toDomain,
    tokenAppFrom,
    tokenAppTo,
  });
  return await request(GET_FORM_FIELD, formFieldMigrate, appUse) as Promise<any>;
};

const getFieldAndUpdateLog = async (
  {fromApp, fromDomain, toApp, toDomain, tokenAppFrom, tokenAppTo}: InforAuth,
  {listLog}: {listLog: Log[]},
  {appUse, logUse}: any
) => {
  let logResult = await processGetForm(
    {
      fromApp,
      fromDomain,
      toApp,
      toDomain,
      tokenAppFrom,
      tokenAppTo,
    },
    {appUse}
  );
  await updateLog(logResult, listLog, logUse);
};

export {getFormField, processGetForm, getFieldAndUpdateLog};
