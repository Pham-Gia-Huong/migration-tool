const parseDataMigrateRecords = ({
  fromDomain,
  toDomain,
  fromApp,
  toApp,
  type,
  tokenAppFrom,
  tokenAppTo,
  query,
  fields,
}: {
  fromDomain: string;
  toDomain: string;
  fromApp: number;
  toApp: number;
  type: string;
  tokenAppFrom: string;
  tokenAppTo: string;
  query: string;
  fields: string;
}) => {
  let fieldsList = fields.split(',');
  return {
    data: {
      fromDomain,
      toDomain,
      fromApp,
      toApp,
      tokenAppFrom,
      tokenAppTo,
      query,
      fields: fieldsList,
    },
    type,
  };
};

const isLoadMigrateRecords = (status: string) => {
  if (status === 'loading') {
    return true;
  }
  return false;
};
export {parseDataMigrateRecords, isLoadMigrateRecords};
