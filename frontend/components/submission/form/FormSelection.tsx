import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ISetSelection } from "../../../pages/submissions/create";
import NavIcons from "../../layout/navigation/NavIcons";
import FormContainer from "./FormContainer";

interface IProps {
  visibility: boolean;
  setSelection: (selectionObject: Object) => void;
}

const WarningText = styled.p`
  color: #f43f5e;
  margin: 0;
  padding: 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  border-width: 0;
  border-radius: 32px;
  padding: 1rem 2rem;
  background: #94a3b8;
  color: white;
  font-weight: bold;
  font-family: 'Archivo Narrow', sans-serif;

  &:hover {
    cursor: pointer;
    background: #64748b;
  }

  & > *:first-child {
    margin: .3rem .3rem 0 0;
  }

  svg {
    width: 18px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  justify-content: center;
  gap: 3rem;
`

const FormSelection: React.FC<IProps> = ({visibility, setSelection}) => {
  return (
    <FormContainer  visibility={visibility} setSelection={setSelection} backButton={false} submitButton={false} dontHide={true}>
      <h1>Choose a submission type</h1>
      <p>You can create two types of submissions. Link submissions and file submissions.</p>
      <WarningText>Choose wisely, you <b>cannot</b> undo this decision after it is made.</WarningText>
      <ButtonWrapper>
        <Button onClick={() => setSelection({"linkForm": true})}>
          <div>{NavIcons.linkIcon}</div>
          <div>Link Submission</div>
        </Button>
        <Button onClick={() => setSelection({"fileForm": true})}>
          <div>{NavIcons.fileIcon}</div>
          <div>File Submission</div>
        </Button>
      </ButtonWrapper>
    </FormContainer>
  )
}

export default FormSelection;