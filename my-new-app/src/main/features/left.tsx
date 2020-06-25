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
const detectSeleted=(listItem,pathName)=>{
  let listSelected = listItem.map((item,key) => {
    if(pathName === item.pathName)
    {
      item.selected = true;
      return item;
    }
    item.selected=false;
    return item;
  })
  return listSelected
}
export {navigationToPage,detectSeleted};
