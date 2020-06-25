import {createFieldMapList} from '../../features/app';
const getFormField = (data: any, dispatch: any,resolve:any) => {
  let newLog = {...data.log}
  newLog.message = data.error || data.status;  
  if (data.records) {
    const fieldMapList = createFieldMapList(data);
    dispatch.getFormSuccess({
      records: fieldMapList,
      status: data.status,
    });    
    resolve(newLog)
    return;
  }
  dispatch.getFormFail({
    status: data.status,
    error: data.error,
  });
  resolve(newLog)
};

export {getFormField};
