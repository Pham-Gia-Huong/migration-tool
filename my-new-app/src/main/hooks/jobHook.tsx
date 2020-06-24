import {useContext} from 'react';
import {context} from '../context';
import * as actionJob from '../context/reducer/job/action';
export default () => {
  let {job} = useContext(context);
  return {
    saveJob: (jobList: job[]) => job.dispatch(actionJob.saveJob(jobList)),
  };
};
