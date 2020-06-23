const parseDataMigrateRecords = ({
  fromDomain,
  toDomain,
  fromApp,
  toApp,
  tokenAppFrom,
  tokenAppTo,
  query,
  fields,
  fieldMapFromTo,
}: {
  fromDomain: string;
  toDomain: string;
  fromApp: number;
  toApp: number;
  tokenAppFrom: string;
  tokenAppTo: string;
  query?: string;
  fields?: string;
  fieldMapFromTo?: {
    from: string;
    to: string;
  }[];
}) => {
  let fieldsList = [] as any[];
  if (fields) {
    fieldsList = fields.split(',');
  }
  return {
    fromDomain,
    toDomain,
    fromApp,
    toApp,
    tokenAppFrom,
    tokenAppTo,
    query,
    fields: fieldsList,
    fieldMapFromTo,
  };
};

const parseFieldMapFromTo = (fieldMapList: fieldMap[]) => {
  let fieldMapFromToList = JSON.parse(JSON.stringify(fieldMapList)) as fieldMap[];
  let fieldMapFromTo = fieldMapFromToList.map((fieldMap) => {
    return {
      from: fieldMap.from.value,
      to: fieldMap.to.value,
    } as {from: string; to: string};
  }) as {from: string; to: string}[];
  return fieldMapFromTo;
};

const isLoadMigrateRecords = (status: string) => {
  if (status === 'loading') {
    return true;
  }
  return false;
};

export {parseDataMigrateRecords, isLoadMigrateRecords, parseFieldMapFromTo};
