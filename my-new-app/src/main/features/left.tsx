const navigationToPage = (key:number, item:any, history:any) => {
  switch (key) {
    case 0:
      history.push("/login")
      break;
    case 1:
      history.push('/migrateConfig');
      break;
    default:
      break;
  }
};
export {navigationToPage};
