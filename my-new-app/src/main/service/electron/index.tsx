const saveRecodsMigrate = (data: any, dispatch: any,resolve:any) => {
  let newLog = {...data.log}  
  newLog.message = data.error || data.status;

  if (!data.error) {
    dispatch.RecordsSuccess({
      status: data.status,
      records: data.records,
    });
    resolve(newLog)
    return;
  }
  dispatch.RecordsFail({
    status: data.status,
    error: data.error,
  });
  resolve(newLog)
};

export {saveRecodsMigrate};
