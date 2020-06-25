const parseLogList =(listLog:Log[])=>{
  let newListLog = JSON.parse(JSON.stringify(listLog)) as Log[];
  let logUi= newListLog.map(log=>{    
    return {
      content:[`${log.id}`,log.fromDomain,log.toDomain,`${log.from}`,`${log.to}`,log.action,log.message]
    }
  })
  return logUi;
}

const addLog =(logList:Log[],log:Log)=>{
  let newLog = JSON.parse(JSON.stringify(log))
  if (logList && logList.length === 0){
    newLog.id = 1;
  }else {
    newLog.id = logList[logList.length-1].id + 1;
  }
  logList.push(newLog)
}
export {parseLogList,addLog}