import React from 'react';
import styled from 'styled-components';

const Layout = (props) => {
  return <LayoutWrapper>{props.children}</LayoutWrapper>;
};



const LayoutWrapper= styled.main`
width:100%;
height: 100%;
display: grid;
place-items: center;
padding: 20px;
`
export default Layout;

