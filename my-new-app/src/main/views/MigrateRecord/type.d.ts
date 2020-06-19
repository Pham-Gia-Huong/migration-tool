interface ModalMirateStatus {
  error: string;
  isLoading: boolean;
  status: string;
}

interface FormFilter {
  query: string;
  fields: string;
  setQuery: (value: string) => void;
  setFields: (value: string) => void;
}

interface FormFromInput {
  domain: string;
  app: number;
  token: string;
  setDomain: (value: any) => void;
  setApp: (value: number) => void;
  setToken: (value: string) => void;
}

interface FormToMigrate extends FormFromInput {
  name: string;
  title: string;
}

interface FormFromMigrate extends FormFromInput, FormFilter {
  name: string;
  title: string;
}

interface ContainerForm extends FormFilter {
  fromDomain: string;
  fromApp: number;
  tokenAppFrom: string;
  toDomain: string;
  toApp: number;
  tokenAppTo: string;
  setToDomain: React.Dispatch<React.SetStateAction<string>>;
  setToApp: React.Dispatch<React.SetStateAction<number>>;
  setTokenAppTo: React.Dispatch<React.SetStateAction<string>>;
  setFromDomain: React.Dispatch<React.SetStateAction<string>>;
  setTokenAppFrom: React.Dispatch<React.SetStateAction<string>>;
  setFromApp: React.Dispatch<React.SetStateAction<number>>;
}
