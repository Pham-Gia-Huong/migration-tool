import React, { useContext } from 'react';
import TableLog from '../../components/Table'
import {context} from '../../context'
import {parseLogList} from '../../features/log'
const LogResult = () => {
  const {log:{state:{listLog}}} = useContext(context);
  const logUi = parseLogList(listLog);
  return (
    <div className="log-resul">
      <TableLog title={"Log Result"} rowList={logUi}  headerList={["No","From Domain","To Domain","From App","To App","Action","Message"]}/>
    </div>
  );
};

export default LogResult;