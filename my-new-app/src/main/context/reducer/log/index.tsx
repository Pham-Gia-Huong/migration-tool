import * as actionType from './actionType'
export default (state:LogState,action:LogAction)=>{
  switch (action.type) {
    case actionType.SAVE_LOG:{
      let listLog = action.data.listLog;
      return {...state, listLog}
    }
      
    default:
      return state;
  }
}