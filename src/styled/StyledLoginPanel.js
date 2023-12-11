import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const StyledHeader = styled.h2`
    display: flex;
    margin: 0 auto 12px auto;
    color: #43A6C6;
    padding: 15px;
`
const ContainerStyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledInput = styled.input`
    display: flex;
    width: 60%;
    margin: 15px 0;
    font-size: 16px;
    border: none;
    border-bottom:2px solid rgb(80, 184, 231);
    padding: 5px 0 5px 5px;
    outline: none;
    &::placeholder {
        font-size: 14px;
        color: #AEAEAE;
        padding-left: 20px;
    }
`
const IconFontAwesome = styled(FontAwesomeIcon)`
    color: rgb(80, 184, 231);
    margin-right: 15px;
    font-size: 20px;
`
const StyledButton = styled.button`
    display: flex;
    width: 60%;
    justify-content: center;
    margin: 25px auto 10px auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 0;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    background-color: white;
    transition: .4s;
    &:hover{
        background-color: rgb(80, 184, 231);
        border: 1px solid rgb(80, 184, 231);
        color: white;
    }
`
const ErrorMessage = styled.p`
    display: flex;
    justify-content: flex-start;
    margin-block-start: 0;
    margin-block-end: 0;
    width: 90%;
    margin: 10px 10px 0 40px;
    color: red;
`
export {StyledHeader,ContainerStyledInput,StyledInput,IconFontAwesome,StyledButton,ErrorMessage}