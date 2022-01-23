
import styled from "styled-components"
export const ButtonGroup = styled.div`
/* width:100%; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
gap: 20px;


& button{
  padding: 4px 30px;
  background-color:#0A1633;
  color: #fff;
  
}
`

export const Button = styled.button`
padding: 4px;
border: none;
cursor: pointer;
user-select: none;
&:hover {
  background-color:#0d1d44;
}
`


export const Input= styled.input`
width: 100%;
font-size: 1.2rem;
color: rgba(0,0,0,0.6);
/* line-height: 1.6rem; */
padding: 2px 5px;
outline: none;
border: none;
margin-top: 10px;
&:focus{
  outline: 4px solid #81C6F4;
}
`

export const Label= styled.label`
display: block;
font-weight: 600;
font-size: 15px;
line-height: 18px;
`

export const InputGroup= styled.div`

`


export const FullRow= styled.div`
box-sizing: border-box;
margin-bottom: 1rem;
`
export const FlexRow= styled.div`
display: flex;
box-sizing: border-box;
margin-bottom: 1rem;
gap: 20px;

& > *{
  width:50%;
  align-self: flex-end;
}
`



export const FormEl = styled.form`
padding: 20px;
max-width: 400px;
width: 100%;

background-color: #EDEDED;
`



export const FormWrapper = styled.div`
min-width: 240px;
min-height: 400px;
max-width: 600px;
width: 100%;
height: 100%;

background-color: #EDEDED;
box-shadow: 2px 13px 15px -8px rgba(0,0,0,0.41);
display: grid;
place-items: center;
position: relative;
`
