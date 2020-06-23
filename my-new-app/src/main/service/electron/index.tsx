const saveRecodsMigrate = (data: any, dispatch: any) => {
  console.log("data",data);
  
  if (!data.error) {
    dispatch.RecordsSuccess({
      status: data.status,
      records: data.records,
    });
    return;
  }
  dispatch.RecordsFail({
    status: data.status,
    error: data.error,
  });
};

export {saveRecodsMigrate};
