import * as actionType from './actionType';

export default (state: JobState, action: JobAction) => {
  switch (action.type) {
    case actionType.SAVE_JOB:
      let jobList = action.data.jobList;
      return {...state, jobList};
    default:
      return state;
  }
};