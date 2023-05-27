import styled from 'styled-components';

export const Button = styled.button`
background-color: #e7e7e7; 
color: black;
font-size: 16px;
cursor: pointer;
padding: 12px 28px;
margin-left: 10px;
border: none;
border-radius: 12px;
transition-duration: 0.4s;
&:hover {
  background-color: #cacccc;  
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
`