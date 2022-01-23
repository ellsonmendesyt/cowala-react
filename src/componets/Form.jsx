import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mask,unMask } from 'remask';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Button,ButtonGroup,Input,Label,FlexRow,InputGroup,FullRow,FormEl,FormWrapper} from './Form.styles'

toast.configure();



const Form = ({onTelChange}) => {

 const [tel,setTel]=useState('')
 const [ip,setIp]=useState('')
 const [name,setName]=useState('')
 const [occupation,setOccupation]=useState('')





const handleNameChange=(e)=>{
  setName(e.target.value)
}

const handleOccupationChange=(e)=>{
  setOccupation(e.target.value)
}

 const handleTelChange=(e)=>{
    setTel(mask(unMask(e.target.value),['(99) 9999-9999']))
 }

 const getIp = (e)=>{
   
    axios.get('https://api.ipify.org?format=json')
   .then((response)=>{
     const ip=response.data.ip
     setIp(ip)
   })
   .catch((error)=>{
     console.log(error.message)
   })
 }

const notify=(type,msg)=>{
  switch(type){
    case type==='success':
      toast.success(msg,{position:toast.POSITION.TOP_CENTER})
    return;
    case type==='warning':
      toast.warn(msg,{position:toast.POSITION.TOP_CENTER})
    return;

  }
}


const saveData=()=>{
  // pega todos os compos e salva no localStorage
  if(name && tel && occupation && ip ){
    const data={ip,name,occupation,tel}
    localStorage.setItem('dados',JSON.stringify(data))
    toast.success("Dados Salvos com sucesso",{position:toast.POSITION.TOP_CENTER})


   

    console.log(localStorage.getItem('dados'))
  }else{
    // alert("preencha todos os campos pra poder salvar!")
    toast.warn("Preencha todos os campos",{position:toast.POSITION.TOP_CENTER})
  }
}

const clearForm=(e)=>{

   setName('')
   setOccupation('')
   setTel('')
   setIp('')
 
 }

const clearData=(e)=>{
 e.preventDefault();
  // limpar dados na tela
  setName('')
  setOccupation('')
  setTel('')
  setIp('')
  // limpar dados armazenados
  localStorage.removeItem('dados');

}



 useEffect(()=>{
//  se tiver dados no localstorage carrega
localStorage.getItem('dados');
 },[])

const handleSubmit=(e)=>{
 e.preventDefault();
}


// 88 8888 88888
  return(
      <FormWrapper>
        
       <FormEl onSubmit={handleSubmit}>
        <FullRow >
          <InputGroup>
          <Label >Nome
          <Input value={name} onChange={handleNameChange} type="text" />
          </Label>
          </InputGroup>
        </FullRow>

        <FlexRow >
          <Label >Profissão
          <Input value={occupation} onChange={handleOccupationChange} type="text" />
          </Label>
          <Label >Celular
          <Input type="tel" value={tel} onChange={handleTelChange} />
          </Label>
        </FlexRow>

        <FlexRow >
          <Label style={{flex:2}} >Meu IP
          <Input readOnly value={ip} type="text" />
          </Label>
           <Button onClick={getIp} style={{flex:1,backgroundColor:"#00D9D0"}}>ENCONTRAR IP</Button>
        </FlexRow>
       
        <ButtonGroup >
          <Button onClick={saveData}>SALVAR</Button>
          <Button onClick={clearData}>LIMPAR</Button>
        </ButtonGroup>


       </FormEl>
      </FormWrapper>
    
  )
};




export default Form;
