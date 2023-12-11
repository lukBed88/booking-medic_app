import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContainerPatientList = styled.div`
        display: flex;
        flex-direction: ${props => props.pattern ? 'row' : 'column'};
        justify-content: ${props => props.pattern ? 'center' : 'flex-start'};
        margin-top: ${props => props.pattern ? '40px' : '10px'};
`
const ContainerPatients = styled.div`
        display: flex;
        flex-direction: column;
        width: 14vw;
        margin-left: 14vw;
        margin-top: 40px;
`
const InputSearchPatient = styled.input`
        max-width: 220px;
        border: none;
        outline: 0;
        border-bottom: 1px solid black;
        padding-left: 1px;
        font-size: 14px;
        &::placeholder {
            color: #696969;
        }
`
const PatientsListUl = styled.ul`
        max-width: 226px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #696969;
        padding-inline-start: 0;
        padding-inline-end: 0;
        margin-block: 0;
        padding-bottom: 10px;
        border-radius: 10px;
        margin-top: 10px;
        display: ${props => props.pattern ? 'none' : 'block'};
`
const PatientsListLi = styled.li`
        display: flex;
        width: 90%;
        list-style: none;
        margin: 3px 0;
        font-size: ${props => props.pattern ? '18px' : '14px'};
        margin-left: ${props => props.pattern ? '0' : '5px'};
        cursor: pointer;
        color: #696969;
        transition: 0.3s;
        &:hover {
            background-color: ${props => props.pattern ? 'none' : 'rgba(80, 184, 231,0.7);'};
            color: ${props => props.pattern ? 'rgba(80, 184, 231,0.7);' : 'white'};
            transition: 0.3s;
            border-radius: 4px;
        }
`
const IconCloseUl = styled(FontAwesomeIcon)`
        margin: 15px 5px -8px 92%;
        transform: translate(-50%,-50%);
        font-size: 11px;
        border: none;
        background-color: transparent;
        color: black;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            transition: 0.3s;
            color: rgb(80, 184, 231);;
        }
`
const TitleHeader = styled.h2`
    color: rgb(14, 134, 212);
    font-weight: 300;
`
const ContainerList = styled.div`
    display: flex;
    width: 200px;
    flex-direction: column;
`
export {ContainerPatientList,
    ContainerPatients,
    InputSearchPatient,
    PatientsListUl,
    PatientsListLi,
    IconCloseUl,
    TitleHeader,
    ContainerList}