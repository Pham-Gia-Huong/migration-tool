import {createUser, getUser, addUser} from '../localStorage';

const setInfoUser = ({domain, username, password}: Authentication) => {
  const isExist = isExistInfoUser();
  if (isExist) {
    addUser({domain, username, password});
    return;
  }
  createUser({domain, username, password});
};

const isExistInfoUser = () => {
  const userStorage = getUser();
  if (userStorage.length > 0) return true;
  return false;
};

export {setInfoUser, isExistInfoUser};
