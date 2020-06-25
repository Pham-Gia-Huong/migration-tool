interface Log {
  fromDomain:string;
  toDomain:string;
  message:string;
  action:string;
  fromApp:string;
  toApp:string;
  id:number;
}
interface TableLog{
  listLog:Log[]
}
declare type LogState = TableLog;

interface SaveLog{
  type: typeof import('./actionType').SAVE_LOG;
  data: {
    listLog:Log[]
  };
}

declare type LogAction = SaveLog;