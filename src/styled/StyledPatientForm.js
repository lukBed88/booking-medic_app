import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const AddButton = styled.button`
        font-size: 16px;
        background-color: transparent;
        border: 1px solid black;
        padding: 8px 7px;
        margin: 0 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transition: 0.4s;
          color: white;
          background-color: #50b8e7;
          border: 1px solid #50b8e7;       
        }
`
const ContainerForm = styled.div`
        position: relative;
        width: 25vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%,0);
        border: 2px solid black;
        border-radius: 18px;
        overflow-y: auto;
        background-color: white;
        border: 2px solid blue;
        z-index: 2;
`
const FormTitle = styled.h3`
        width: 100%;
        color: white;
        text-align: center;
        padding: 25px 0;
        background-color: rgb(80, 184, 231);
        font-weight: 200;
        letter-spacing: 1px;
        margin-block-start:0;
        margin-block-end:0;
        margin-bottom: 10px;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
`
const ContainerSendButton = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 30px 0;
`
const InputForm = styled.input`
        font-size: 16px;
        width: 55%;
        border: none;
        border-bottom: ${(props) => (props.border ? '2px solid rgb(80, 184, 231)' : '2px solid #FF1205')};
        outline: 0;
        padding: 5px;
        ::placeholder {
         font-size: 16px;
         padding-left: 10px;
         color: ${(props) => (props.border ? 'grey' : '#FF1205')};
        }
`
const Form = styled.form`
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
`
const InputContainer = styled.div`
        display:flex;
        justify-content: center;
        font-size: 16px;
        margin: 15px;
        align-items: flex-end;
` 
const IconForm = styled(FontAwesomeIcon)`
     font-size:22px;
     color:rgb(80, 184, 231);
     vertical-align: 100px;
     margin-right: 20px;
`
const IconPatient = styled(FontAwesomeIcon)`
     font-size:22px;
     color:white;
     margin-right: 20px;
`
const SendButton = styled.button`
        font-size: 16px;
        background-color: transparent;
        border: 1px solid black;
        padding: 8px 10px;
        margin: 40px 60px 30px 60px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transition: 0.4s;
          color: white;
          background-color: #50b8e7;
          border: 1px solid #50b8e7;       
        }
`
const CloseButton = styled(FontAwesomeIcon)`
    position: absolute;
    top:5%;
    left: 93%;
    transform: translate(-50%,-50%);
    font-size: 20px;
    transition:all 0.4s;
    color: white;
    cursor: pointer;
    &:hover {
        transition:all 0.4s;
        color: black;
    }
`
const ContainerErrorMessage = styled.div`
`
const ErrorMessage = styled.p`
        margin-block-start: 1em;
        margin-block-end: 1em;
        font-size: 14px;
        color: #FF1205;
`

export {AddButton,
    ContainerForm,
    FormTitle,
    ContainerSendButton,
    InputForm,
    Form,
    InputContainer,
    IconForm,
    IconPatient,
    SendButton,
    CloseButton,
    ContainerErrorMessage,
    ErrorMessage}