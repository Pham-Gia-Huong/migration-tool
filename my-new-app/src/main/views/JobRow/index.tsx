import React, {useContext} from 'react';

import jobHook from '../../hooks/jobHook';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus, faEdit} from '@fortawesome/free-solid-svg-icons';
import {addJob, deleteJob, editJob} from '../../features/job';
import {context} from '../../context';
import './index.css';

const JobRow = ({id}: {id: number}) => {
  const {job} = useContext(context);
  const jobUse = jobHook();
  let jobState = job.state;

  const handleDelete = (id: number) => {
    let newJobList = deleteJob(jobState.jobList, id);
    jobUse.saveJob(newJobList);
  };
  const handleAdd = (id: number) => {
    let newJobList = addJob(jobState.jobList, id);
    jobUse.saveJob(newJobList);
  };
  const handleEdit = (id: number) => {
    let newJobList = editJob(jobState.jobList, id);    
    jobUse.saveJob(newJobList);
  };
  return (
    <div className="action-row">
      <FontAwesomeIcon icon={faPlus} onClick={() => handleAdd(id)} />
      <FontAwesomeIcon icon={faMinus} onClick={() => handleDelete(id)} />
      <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(id)} />
    </div>
  );
};

export default JobRow;
