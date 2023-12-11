import styled from "styled-components";
import Select from "react-select";
// const SelectDoctorsOption = styled.select`
const SelectDoctorsOption = styled(Select)`
    display: inline-block;
    width:15vw; 
    max-width: 25vw; 
    height: auto; 
    margin-left: 20px;
    margin-right: 10px;
`
const Option = styled.option`
    outline: 0;
`

export {SelectDoctorsOption,Option}