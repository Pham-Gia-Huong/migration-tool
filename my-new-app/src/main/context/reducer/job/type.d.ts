interface job {
  title: string;
  id: number;
  selected: boolean;
  migrateInfo: MigrateInfor;
}

interface JobList {
  jobList: job[];
}
declare type JobState = JobList;

interface rowJobAction {
  type: typeof import('./actionType').SAVE_JOB;
  data: {
    jobList: job[];
  };
}
declare type JobAction = rowJobAction;
