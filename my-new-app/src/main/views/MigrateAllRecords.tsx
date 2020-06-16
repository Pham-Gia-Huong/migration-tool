import React, { useState } from 'react'
import InputField from '../components/Input/Input'
import Button from '../components/Button'
const MigrateAllRecord = () => {
  const [fromDomain,setFromDomain] = useState("");

  return (
    <div>
      <InputField label={"From Domain"} defaultValue={fromDomain} onChange={(value)=>setFromDomain(value)}/>
      <InputField label={"From App"} defaultValue={""} onChange={(value)=>{}}/>

      <InputField label={"To Domain"} defaultValue={""} onChange={(value)=>{}}/>
      <InputField label={"To App"} defaultValue={""} onChange={(value)=>{}}/>
      <Button label={"Migrate All Record"} onClick={()=>{}}/>
    </div>
  )
}

export default MigrateAllRecord