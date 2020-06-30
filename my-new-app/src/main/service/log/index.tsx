import {addLog} from '../../features/log';

const updateLog = async (logPromise: Promise<any>, listLog: Log[], logUse: any) => {
  let logResult = await logPromise;
  addLog(listLog, logResult);
  logUse.saveLog(listLog);
};

export {updateLog};
