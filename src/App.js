
import {useState,useEffect} from 'react'
import axios from "axios";
import styled from 'styled-components'
import Form from './componets/Form';
import InputMask from './componets/InputMask';
import Input from './componets/Input';

import Navbar from './componets/Navbar'
import Layout from './componets/Layout';
function App() {

  const [ip,setIp]=useState('');
  const [tel, setTel]=useState('')




useEffect(()=>{
axios.get('https://ip-fast.com/api/ip/')
.then((response)=>{
  const {data}=response;
  setIp(data);
})
.catch((error)=>{
  console.warn(error)
})
},[])


  return (
<AppContainer >
      <Navbar />
    <Layout>
   
      <Form/>
      
      
    </Layout>
    </AppContainer>
  );
}

const AppContainer = styled.div`
display: grid;
place-items: center;
width:100vw;
max-height:100%;
background-color: #fff;
`



export default App;
