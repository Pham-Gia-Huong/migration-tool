import React from 'react';
import InputField from '../../../components/Input/Input';

const FormFilter = ({
  query,
  fields,
  setQuery,
  setFields,
}: {
  query: string;
  fields: string;
  setQuery: (value: string) => void;
  setFields: (value: string) => void;
}) => {
  return (
    <React.Fragment>
      <InputField type={'text'} label={'query'} defaultValue={query} onChange={(value: string) => setQuery(value)} />
      <InputField type={'text'} label={'fields'} defaultValue={fields} onChange={(value: string) => setFields(value)} />
    </React.Fragment>
  );
};

export default FormFilter;
