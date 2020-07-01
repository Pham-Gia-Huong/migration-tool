import React, {useContext} from 'react';
import DropdownForm from '../../../components/Dropdown';
import {updateFromFieldMapValue, addDataFieldMapList} from '../../../features/app';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import appHook from '../../../hooks/appHook';
import jobHook from '../../../hooks/jobHook';
import {context} from '../../../context/';
import {getKeyValue} from '../../../features/app';
import {addFieldMapListToJob} from '../../../features/job';
import './index.css';

export const ListFieldMap = ({
  id,
  showIcon,
  indexListString,
  field,
}: {
  id: number;
  showIcon: boolean;
  indexListString: string;
  field: string;
}) => {
  const {app: AppContext, job} = useContext(context);
  // const {records: fieldMapList} = AppContext.state;
  let {jobList} = job.state;

  const useApp = appHook();
  const useJob = jobHook();

  return (
    <React.Fragment>
      {jobList.map((job) => {
        return job.migrateInfo.fieldMapList.map((fieldMap, key) => {
          if (job.id === id) {
            return (
              <div className="field-map-wrapped" key={key}>
                {showIcon && (
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => {
                      let newFileMapList = addDataFieldMapList(job.migrateInfo.fieldMapList);
                      // useApp.updateFieldMap(newFileMapList);
                      let newJobList = addFieldMapListToJob(jobList, id, newFileMapList);
                      useJob.saveJob(newJobList);
                    }}
                  />
                )}
                <DropdownForm
                  itemList={getKeyValue(indexListString)(fieldMap)}
                  label={getKeyValue(field)(fieldMap).label}
                  onClick={(key, item) => {
                    console.log('item', item);

                    let newFileMapList = updateFromFieldMapValue(job.migrateInfo.fieldMapList, fieldMap.id, item, indexListString, field);
                    let newJobList = addFieldMapListToJob(jobList, id, newFileMapList);
                    useJob.saveJob(newJobList);
                    // useApp.updateFieldMap(newFileMapList);
                  }}
                />
              </div>
            );
          }
        });
      })}
    </React.Fragment>
  );
};
