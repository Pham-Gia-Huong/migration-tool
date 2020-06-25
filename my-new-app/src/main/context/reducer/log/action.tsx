import * as actionType from './actionType';
const saveLog=(listLog:Log[]) :LogAction=>{    
  return {
    type: actionType.SAVE_LOG,
    data:{
      listLog,
    }
  }
}
export {saveLog}