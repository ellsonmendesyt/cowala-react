import React from 'react';
import styled from 'styled-components';

import logo from '../imgs/cowala.png'
import brand from '../imgs/brand.svg'
const Navbar = () => {
  return(
  <NavbarWrapper>
      <LogoBox><img width={50} src={logo} alt="" /></LogoBox>
      <BrandBox>  <img src={brand} alt="" /> </BrandBox>
  </NavbarWrapper>) 
};

export default Navbar;

const NavbarWrapper = styled.header`
display: flex;
align-items: center;
background-color: #0A1633;
padding: 5px;
max-width: 100%;
width: 100%;
`

const LogoBox = styled.div`
width: 60px;
& img{
    width: 100%;
}
`

const BrandBox= styled.div`
width: 140px;
margin-left: 20px;
& img{
    width:100%;
}
`