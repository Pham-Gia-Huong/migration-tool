import {createUser, getUser, addUser} from '../../localStorage';
import {USER_INFO_LIST} from '../../localStorage/constant';
import React from 'react';
import InputField from '../../components/Input';
const setInfoUser = ({domain, username, password}: Authentication) => {
  let status = false;
  const isExist = isExistInfoUser();
  if (isExist) {
    addUser({domain, username, password});
    status = true;
  } else if (!isExist) {
    createUser({domain, username, password});
    status = true;
  }
  return status;
};

const isExistInfoUser = () => {
  const userStorage = getUser();
  if (userStorage.length > 0) return true;
  return false;
};

const getTypeBtnLogin = () => {
  let user = localStorage.getItem(USER_INFO_LIST);
  if (user) {
    return 'Edit';
  }
  return 'Create';
};

const parseListUserToUi = () => {
  let listUser = JSON.parse(localStorage.getItem(USER_INFO_LIST)) as Authentication[];
  let listUserUi = listUser.map((user) => ({
    content: [`${user.domain}`, `${user.username}`, <InputField label={"Password"} onChange={()=>{}} type={'password'} defaultValue={user.password} />],
  }));
  return listUserUi;
};

export {setInfoUser, parseListUserToUi, isExistInfoUser, getTypeBtnLogin};
