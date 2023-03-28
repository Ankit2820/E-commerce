import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
const Container = styled.div`
   height: 60px;  
  @media only screen and (max-width: 390px){
    height: 50px; 
   }
`;
 
const Wrapper = styled.div`
   padding: 10px 20px;
   display:flex;
   align-items: center;
   justify-content: space-between;  
    @media only screen and (max-width: 390px){
   padding:10px 0px;}
`;

const Left = styled.div`
flex:1;
display: flex;
align-item: center;
`;
const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
 @media only screen and (max-width: 390px){
   display: none;
 }
`;
const  SearchContainer= styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 5px;
   @media only screen and (max-width: 390px){
   margin-left: 5px;
 }
`
const Input = styled.input`
 border: none;
@media only screen and (max-width: 390px){
  width: 50px;}
`
const Center = styled.div`
flex: 1
`;

const Logo = styled.h1`
   font-weight: bold;
   text-align: center;
  @media only screen and (max-width: 390px){
   font-size: 24px; }  
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end; 
@media only screen and (max-width: 390px){
  flex: 2;
  justifyContent: Center;}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
      @media only screen and (max-width: 390px){
      margin-left: 8px;
      margin-right: 5px;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
               <SearchContainer>
               <Input/>
                <SearchOutlinedIcon style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
                   </Left>
            <Center><Logo>
             Ankit.
            </Logo>
                </Center>
            <Right>
             <Link to={`/register`}>
               <MenuItem>REGISTER</MenuItem>
               </Link>
               <Link to={`/login`}>
               <MenuItem>SIGN IN</MenuItem>
                </Link>
                <Link to={`/cart`}>
               <MenuItem>
               <Badge badgeContent={4} color="primary">
               <ShoppingCartOutlinedIcon/>
                </Badge>   
               </MenuItem>
                </Link>
            </Right>
            </Wrapper>   
    </Container>
  )
}

export default Navbar
