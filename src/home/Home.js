import React from "react";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 27vw;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid black;
    flex-direction: column;
    margin: 0 auto;
    padding: 30px 0;
`
const Header = styled.h2`
    display: flex;
    margin: 10px auto 40px auto;
    justify-content: center;
    width: 50%;
`
const StyledNavLink = styled(NavLink)`
    display: flex;
    width: 50%;
    justify-content: center;
    margin: 5px auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 0;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    transition: .4s;
    &:hover{
        background-color: rgb(80, 184, 231);
        border: 1px solid rgb(80, 184, 231);
        color: white;
    }
`
const Home = () => {
    
    return (
        <Container>
        <Header>Witaj</Header>
        <StyledNavLink to = {'/login'}>Zaloguj się</StyledNavLink>
        <StyledNavLink to = {'/registration'}>Zarejestruj się</StyledNavLink>
        <StyledNavLink to = {'/resetPassword'}>Przypomnij hasło</StyledNavLink>
        </Container>
    )

}
export default Home