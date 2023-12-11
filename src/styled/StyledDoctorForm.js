import styled from "styled-components"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const DoctorContainer  = styled.div`
        position: relative;
        justify-content: center;
        width: 25vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-8%);
        border: 2px solid black;
        border-radius: 18px;
        background-color: white;
        z-index: 2;
`
const FormTitle = styled.div`
        display: flex;
        width: 100%;
        color: white;
        justify-content: center;
        align-items: center;
        background-color: rgb(80, 184, 231);
        font-weight: 200;
        letter-spacing: 1px;
        margin-block-start:0;
        margin-block-end:0;
        margin-bottom: 10px;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
`
const HeaderTitle = styled.h3`
    font-weight: 200;
    font-size:20px;
`
const InputContainer = styled.div`
        display:flex;
        justify-content: center;
        font-size: 14px;
        margin: 10px 15px 25px 15px;
        align-items: flex-end;
` 
const InputForm = styled.input`
        width: 50%;
        font-size: 16px;
        border: none;
        border-bottom: ${(props) => (props.border ? '2px solid rgb(80, 184, 231)' : '2px solid #FF1205')};
        outline: 0;
        padding: 5px;
        ::placeholder {
         font-size: 16px;
         padding-left: 10px;
        }
`
const ContainerSendButton = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 30px 0;
`
const SendDoctorButton = styled.button`
        display: flex;
        justify-content: center;
        font-size: 16px;
        background-color: transparent;
        border: 1px solid black;
        padding: 10px 10px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transition: 0.4s;
          color: white;
          background-color: #50b8e7;
          border: 1px solid #50b8e7;       
        }
`
const ContainerSpecialization = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
`
const ParagraphSpecialization = styled.p`
    display: flex;
    margin-right: 20px;
    font-size: 18px;
    align-items: center;
    margin-block-start:0;
    margin-block-end:0;
`
const SelectSpecialization = styled.select`
    border: 2px solid black;
    /* display: ${props => props.active === true ? 'none' : 'inline'}; */
    margin-bottom: 30px;
    width: 45%;
    margin-top: 30px;
`
const Option = styled.option`
`
const ContainerSlots = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`
const CheckboxesContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  margin: 8px 8px;
`;
const SingleCheckbox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-self: center;
  padding: 3px 4px;
  border-radius: 5px;
  background-color: ${(props) => (props.col ? 'rgb(80, 184, 231)' : 'white')};
  color: ${(props) => (props.col ? 'white' : 'black')};
  border: 1px solid ${(props) => (props.col ? 'rgb(80, 184, 231)' : 'black')};
  transition: 0.3s;
  &:hover{
   border:1px solid rgb(80, 184, 231);
}
`
const HourParagraph = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start:0;
    margin-block-end:0;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  cursor: pointer;
  opacity: 0;
`
const CloseButton = styled(FontAwesomeIcon)`
    position: absolute;
    top:6%;
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
const IconTitle = styled(FontAwesomeIcon)`
     font-size:22px;
     color: white;
     margin-right: 20px;
`
const IconDoctorForm = styled(FontAwesomeIcon)`
     font-size:22px;
     color:rgb(80, 184, 231);
     margin-right: 20px;
`
const IconDoctorSpecialization = styled(FontAwesomeIcon)`
     font-size:22px;
     color:rgb(80, 184, 231);
     margin-right: 10px;
`
const AddDoctorButton = styled.button`
        font-size: 16px;
        background-color: transparent;
        border: 1px solid black;
        padding: 8px 7px;
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
const ParagraphOfficeHoursContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-block-start:0;
        margin-block-end:0;
        font-size: 18px;
        margin-bottom: 20px;
`
const IconOfficeHours = styled(FontAwesomeIcon)`
     font-size:22px;
     color: #50b8e7;
     margin-right: 20px;
`
const ContainerErrorMessage = styled.div`
        text-align: center;
        margin-bottom: 10px;
`
const ErrorMessage = styled.p`
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 14px;
        color: #FF1205;
`
export {DoctorContainer,
    FormTitle,
    HeaderTitle,
    InputContainer,
    InputForm,
    ContainerSendButton,
    SendDoctorButton,
    ContainerSpecialization,
    ParagraphSpecialization,
    SelectSpecialization,
    Option,
    ContainerSlots,
    CheckboxesContainer,
    SingleCheckbox,
    HourParagraph,
    HiddenCheckbox,
    CloseButton,
    IconTitle,
    IconDoctorForm,
    IconDoctorSpecialization,
    AddDoctorButton,
    ParagraphOfficeHoursContainer,
    IconOfficeHours,
    ContainerErrorMessage,
    ErrorMessage}