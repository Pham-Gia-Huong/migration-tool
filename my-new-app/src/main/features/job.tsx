import React from 'react';
import JobRow from '../views/JobRow';
import {isObjectExistValue} from '../utils';
import {jobValue} from '../context/reducer/job/defaultData';
const parseJobListToUi = (jobList: job[]) => {
  let newJobUi = JSON.parse(JSON.stringify(jobList)) as job[];
  let jobUi = newJobUi.map((job) => {
    return {
      content: [`${job.id}`, `${job.title}`, <JobRow id={job.id} />],
    };
  });
  return jobUi;
};

const addJob = (jobList: job[], id: number) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  var max = newJobList.map((job) => job.id).reduce((newValue, currentValue) => Math.max(newValue, currentValue));

  let index = newJobList.findIndex((job) => job.id === id);
  let indexMax = newJobList.findIndex((job) => job.id === max);

  let job = {id: newJobList[indexMax].id + 1, title: 'My job ' + newJobList[indexMax].id, selected: false, migrateInfo: jobValue.jobList[0].migrateInfo};
  newJobList.splice(index + 1, 0, job);

  return newJobList;
};

const editJob = (jobList: job[], id: number) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  newJobList = newJobList.map((job) => {
    if (job.id === id) {
      job.selected = true;
    } else {
      job.selected = false;
    }
    return job;
  });
  return newJobList;
};

const deleteJob = (jobList: job[], id: number) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  newJobList.map((job, i) => {
    if (job.id === id) {
      newJobList.splice(i, 1);
    }
  });
  return newJobList;
};
const clearJobSelected = (jobList: job[]) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  newJobList = newJobList.map((job) => {
    job.selected = false;
    return job;
  });
  return newJobList;
};

const addJobMigrateInfor = (jobList: job[], newMigrateInfo: MigrateInfor) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  newJobList = newJobList.map((job) => {
    if (job.selected) {
      job.migrateInfo = newMigrateInfo;
    }
    return job;
  });
  return newJobList;
};

const addFieldMapListToJob = (jobList: job[], id: number, fieldMapList: fieldMap[]) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  newJobList = newJobList.map((job) => {
    if (job.selected) {
      job.migrateInfo.fieldMapList = fieldMapList;
    }
    return job;
  });
  return newJobList;
};

const findJobSelected = (jobList: job[]) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  let jobListMatchId = newJobList.filter((job) => job.selected);
  let newJobMatchId = {} as job;
  if (jobListMatchId) {
    newJobMatchId = jobListMatchId[0] as job;
  }
  return newJobMatchId;
};

const addTitleToJob = (jobList: job[], title: string) => {
  let newJobList = JSON.parse(JSON.stringify(jobList)) as job[];
  newJobList = newJobList.map((job) => {
    if (job.selected) {
      job.title = title;
    }
    return job;
  });
  return newJobList;
};

export {addFieldMapListToJob,addTitleToJob, findJobSelected, parseJobListToUi, editJob, addJob, deleteJob, clearJobSelected, addJobMigrateInfor};
