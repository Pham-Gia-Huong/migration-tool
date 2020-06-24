const isObjectExistValue = (object: any): boolean => {
  let valueList = [];
  for (const key in object) {    
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      if (typeof value === 'object') {
        continue;
      }
      if (typeof value === 'string' && value) {
        valueList.push(true);
        continue;
      }
      if (typeof value === 'number') {
        valueList.push(true);
        continue;
      }
      valueList.push(false);
    }
  }
  return valueList.every((value) => value);
};

const isObjectExistValueList = (object: any): boolean => {
  let valueList = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      if (typeof value === 'string' && value) {
        valueList.push(true);
        continue;
      }
      if (typeof value === 'number') {
        valueList.push(true);
        continue;
      }
      if (typeof value === 'object' && Array.isArray(value) && value.length > 0) {
        valueList.push(true);
        continue;
      }
      if (typeof value === 'object' && Object.keys(value).length > 0) {
        valueList.push(true);
        continue;
      }
      valueList.push(false);
    }
  }
  return valueList.every((value) => value);
};

export {isObjectExistValue, isObjectExistValueList};
