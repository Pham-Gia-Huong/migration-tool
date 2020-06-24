interface ModalMirateStatus {
  error: string;
  isLoading: boolean;
  status: string;
}

interface FormFilter {
  query?: string;
  fields?: string;
  setQuery?: (value: string) => void;
  setFields?: (value: string) => void;
}

interface AppForm {
  domain: string;
  app: number;
  token: string;
}

interface FormFromInput extends AppForm {
  setDomain: (value: any) => void;
  setApp: (value: number) => void;
  setToken: (value: string) => void;
}
interface FieldDropdown {
  fieldList?: {
    label: string;
    value: string;
  };
}

interface FormToMigrate extends FormFromInput, FieldDropdown {
  name: string;
  title: string;
}

interface FormFromMigrate extends FormFromInput, FormFilter, FieldDropdown {
  name: string;
  title: string;
}

interface InforAuth {
  fromDomain: string;
  fromApp: number;
  tokenAppFrom: string;
  toDomain: string;
  toApp: number;
  tokenAppTo: string;
}

interface MigrateInfor {
  fromDomain: string;
  toDomain: string;
  fromApp: number;
  toApp: number;
  tokenAppFrom: string;
  tokenAppTo: string;
  query?: string;
  fields?: string | string[];
  fieldMapList?: fieldMap[];
  fieldMapFromTo?: {
    from: string;
    to: string;
  }[];
}

interface ContainerForm extends FormFilter, InforAuth {
  setToDomain: React.Dispatch<React.SetStateAction<string>>;
  setToApp: React.Dispatch<React.SetStateAction<number>>;
  setTokenAppTo: React.Dispatch<React.SetStateAction<string>>;
  setFromDomain: React.Dispatch<React.SetStateAction<string>>;
  setTokenAppFrom: React.Dispatch<React.SetStateAction<string>>;
  setFromApp: React.Dispatch<React.SetStateAction<number>>;
}

interface ModalMigrate extends InforAuth, FormFilter {
  id: number;
  isOpen: boolean;
}

interface ButtonFieldMap extends InforAuth, FormFilter {
  id: number;
}
