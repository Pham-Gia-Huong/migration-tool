import axios from 'axios';

const ignoreField = (formField: any) => {
  let newFormField = JSON.parse(JSON.stringify(formField));
  let fieldIgnoreList = ['Assignee', 'Status', 'Categories'];
  fieldIgnoreList.forEach((fieldIgnore) => {
    delete newFormField.properties[fieldIgnore];
  });
  return newFormField;
};

const getFormField = async ({domain, app, token}: {domain: string; app: number; token: string}) => {
  try {
    let formField = await axios({
      method: 'GET',
      headers: {
        'X-Cybozu-API-Token': token,
      },
      url: `https://${domain}/k/v1/app/form/fields.json?app=${app}`,
    });
    let newFormField = ignoreField(formField.data);

    return newFormField;
  } catch (error) {
    throw error;
  }
};

const getFormMigrate = async ({fromDomain, fromApp, tokenAppFrom, toDomain, toApp, tokenAppTo}: InforAuth) => {
  try {
    let formFieldFrom = await getFormField({domain: fromDomain, app: fromApp, token: tokenAppFrom});
    let formFieldTo = await getFormField({domain: toDomain, app: toApp, token: tokenAppTo});
    return {
      id: 0,
      formFieldFrom,
      formFieldTo,
    };
  } catch (e) {
    throw e;
  }
};
export {getFormMigrate};
