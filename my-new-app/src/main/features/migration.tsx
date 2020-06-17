const parseDataMigrateRecords = ({
  fromDomain,
  toDomain,
  fromApp,
  toApp,
  type,
  tokenAppFrom,
  tokenAppTo,
}: {
  fromDomain: string;
  toDomain: string;
  fromApp: number;
  toApp: number;
  type: string;
  tokenAppFrom: string;
  tokenAppTo: string;
}) => ({
  data: {
    fromDomain,
    toDomain,
    fromApp,
    toApp,
    tokenAppFrom,
    tokenAppTo,
  },
  type,
});

const isLoadMigrateRecords = (status: string) => {  
  if (status === 'loading') {
    return true;
  }
  return false;
};
export {parseDataMigrateRecords, isLoadMigrateRecords};
