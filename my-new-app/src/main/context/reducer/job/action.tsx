import * as actionType from './actionType';

export const saveJob = (jobList: job[]): JobAction => {

  return {
    type: actionType.SAVE_JOB,
    data: {
      jobList,
    },
  };
};
