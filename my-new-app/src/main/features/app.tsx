interface fieldCode {
  [key: string]: object;
}
const _parseFieldCode = (fieldCodeObj: fieldCode) => {
  let fieldCodeList = [];
  for (const prop in fieldCodeObj) {
    const fieldParse = {
      label: prop.toLowerCase(),
      value: prop,
    };
    fieldCodeList.push(fieldParse);
  }
  return fieldCodeList;
};

const createFieldMapList = (data: any) => {
  const records = data.records;
  let fieldCodeFromList = _parseFieldCode(records.formFieldFrom.properties);
  let fieldCodeToList = _parseFieldCode(records.formFieldTo.properties);

  let defaultFromValue = fieldCodeFromList[0];
  let defaultToValue = fieldCodeToList[0];

  return [
    {
      fieldCodeFromList,
      fieldCodeToList,
      from: defaultFromValue,
      to: defaultToValue,
      id: records.id,
      status: data.status,
    },
  ];
};
const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];

const updateFromFieldMapValue = (fieldMapList: fieldMap[], id: number, value: string, prefixList: string, prefixChange: string) => {
  let newFieldMapList = JSON.parse(JSON.stringify(fieldMapList)) as fieldMap[];
  newFieldMapList.map((fieldMap) => {
    getKeyValue(prefixList)(fieldMap).map((fieldValue: string) => {
      if (fieldMap.id === id) {
        getKeyValue(prefixChange)(fieldMap).value = value;
        getKeyValue(prefixChange)(fieldMap).label = value.toLocaleLowerCase();
      }
      return fieldValue;
    });
  });
  return newFieldMapList;
};

const addDataFieldMapList = (fieldMapList: fieldMap[]) => {
  let newFieldMapList = JSON.parse(JSON.stringify(fieldMapList)) as fieldMap[];
  let newFieldMap = JSON.parse(JSON.stringify(newFieldMapList[newFieldMapList.length - 1]));
  newFieldMap.id = newFieldMap.id + 1;
  newFieldMap.from = newFieldMap.fieldCodeFromList[0];
  newFieldMap.to = newFieldMap.fieldCodeToList[0];
  newFieldMapList.push(newFieldMap);
  return newFieldMapList;
};

export {createFieldMapList, updateFromFieldMapValue, addDataFieldMapList};
