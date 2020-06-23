import {createFieldMapList} from '../../features/app';
const getFormField = (data: any, dispatch: any) => {
  if (data.records) {
    const fieldMapList = createFieldMapList(data);
    dispatch.getFormSuccess({
      records: fieldMapList,
      status: data.status,
    });
    return;
  }
  dispatch.getFormFail({
    status: data.status,
    error: data.error,
  });
};

export {getFormField};
