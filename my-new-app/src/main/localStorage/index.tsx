const createUser = (auth: Authentication) => {
  let listUser = [{...auth}];
  localStorage.setItem('listUser', JSON.stringify(listUser));
};

const addUser = (auth: Authentication) => {
  let listUser = JSON.parse(localStorage.getItem('listUser'));
  listUser.push(auth);
  localStorage.setItem('listUser', JSON.stringify(listUser));
};

const getUser = () => {
  let listUser = JSON.parse(localStorage.getItem('listUser')) || [];
  return listUser;
};

export {createUser, addUser, getUser};
