import * as actionElectron from '../context/reducer/electronService/action';
export default () => {
  return {
    electronService: (action: string, data: any) => actionElectron.request(action, data),
  };
};
