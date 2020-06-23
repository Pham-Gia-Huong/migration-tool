import * as appAction from '../context/reducer/App/action';
import * as baseAction from '../context/reducer/base/action';
import {context} from '../context';
import {useContext} from 'react';

export default () => {
  const {app} = useContext(context);

  return {
    request: () => app.dispatch(baseAction.request()),

    getFormSuccess: (data: formField) => app.dispatch(appAction.getFormSuccess(data)),
    getFormFail: (data: formField) => app.dispatch(appAction.getFormFail(data)),

    updateFieldMap: (listFieldMap: fieldMap[]) => app.dispatch(appAction.updateFieldMap(listFieldMap)),
    clearError:()=> app.dispatch(baseAction.clearError())
  };
};
