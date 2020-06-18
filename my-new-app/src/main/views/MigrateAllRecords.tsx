import React, {useState, useContext, useEffect} from 'react';
import InputField from '../components/Input/Input';
import Button from '../components/Button';
import {parseDataMigrateRecords} from '../features/migration';
import {context} from '../context';
import {request} from '../service';
import migrationHook from '../hooks/migrateHook';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown,faCaretRight,faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const InforAfterMigrate=({error,isLoading,status}:{error:string,isLoading:boolean,status:string})=>{
  const [isShow,setIsShow]=useState(!isLoading)  

  useEffect( ()=> {
    setIsShow(!isLoading)
  },[isLoading])

  if (isLoading) {
    return <Spinner />
  }
  
  if(status === "fail"){
    setTimeout(() => {
      setIsShow(false);
    return }, 3500);
    return <Modal isOpen={isShow} type={"danger"} text={error}/>
   
  }
  if (status === "success"){
    setTimeout(() => {
      setIsShow(false)
      return;
    }, 1500);
    return  <Modal isOpen={isShow} type={"success"} text={""}/>
  
  }
  return <div></div>

}

const Form =({name,title,domain,app,token,setDomain,setApp,setToken}:{name:string,title:string,domain:string,app:number,token:string
  ,setDomain:(value:any)=>void,
  setApp:  (value: number) => void,
  setToken:(value: string) => void,
  })=>{

return (
  <div className="from-form" title={title}>
   <div className="from-form-title">{name}</div>
   <div className="from-form-input">
    <InputField type={'text'} label={'From Domain'} defaultValue={domain} onChange={(value: string) => setDomain(value)} />
    <InputField type={'number'} label={'From App'} defaultValue={app} onChange={(value: number) => setApp(value)} />
    <InputField type={'text'} label={'Token App From'} defaultValue={token} onChange={(value: string) => setToken(value)} />
   </div>
   <div className="from-form-expland">
    <div className="from-form-expland-title">Expand</div>
   <FontAwesomeIcon icon={faCaretDown} />
   </div>
</div>
)}

const MigrateAllRecord = () => {
  const [toDomain, setToDomain] = useState('');
  const [fromDomain, setFromDomain] = useState('');
  const [fromApp, setFromApp] = useState(0);
  const [tokenAppFrom, setTokenAppFrom] = useState('');
  const [toApp, setToApp] = useState(0);
  const [tokenAppTo, setTokenAppTo] = useState('');
  const {migration} = useContext(context);
  const useMigration = migrationHook();
  const state = migration.state;  
  return (
    <div className="wrap-migrate-records">
      <InforAfterMigrate error={state.error} isLoading={state.isLoading} status={state.status}/>
      <div className="wrap-from">
        <Form 
              title={"get"}

          name={"Get App"}
          domain={fromDomain} 
          app={fromApp} 
          token={tokenAppFrom} 
          setDomain={setFromDomain} 
          setToken={setTokenAppFrom} 
          setApp={setFromApp} 
        />
        <div className="wrap-from-arrow">
        <FontAwesomeIcon icon={faCaretRight} />
        </div>
      <Form 
        title={"set"}
        name={"Set App"}
        domain={toDomain} 
        app={toApp} 
        token={tokenAppTo} 
        setDomain={setToDomain} 
        setApp={setToApp} 
        setToken={setTokenAppTo} 
        />
        <div className="wrap-from-add">
          <div className="wrap-from-add-hover" onMouseOver={()=> {
            let parentNode = document.getElementsByClassName("wrap-from")[0] as HTMLElement;
            parentNode.style.border= "2px solid #34242454"            
          } }
          onMouseOut={()=> {
            let parentNode = document.getElementsByClassName("wrap-from")[0] as HTMLElement;
            parentNode.style.border= "none"            
          } }
          >
          <FontAwesomeIcon icon={faPlusCircle} />
          </div>
        </div>
      </div>
      <Button
        label={'Migrate Records'}
        onClick={() => {
          let migrateRecordsValue = parseDataMigrateRecords({
            fromApp,
            fromDomain,
            toApp,
            toDomain,
            tokenAppFrom,
            tokenAppTo,
            type: 'RECORDS',
          });
          request('migrate', migrateRecordsValue, useMigration);
        }}
      />
    </div>
  );
};

export default MigrateAllRecord;
