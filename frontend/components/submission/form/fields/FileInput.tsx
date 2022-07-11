import React from "react";
import styled from "styled-components";
import NavIcons from "../../../layout/navigation/NavIcons";
import { Error } from "./TextInput";

interface IProps {
  id: string;
  setData: (inputData: Object) => void;
  errors?: string[];
}

interface IUploadWrapper {
  error: boolean;
}

const UploadWrapper = styled.div<IUploadWrapper>`
  display: flex;
  border-radius: 12px;
  background: ${props => props.error == true ? '#FCA5A5' : '#94a3b8'};
  margin-top: .5rem;
  margin-bottom: 1.5rem;
  align-items: center;
  width: 100%;
  ${props => props.error == true ? `
    svg {
      width: 24px;
      margin-left: 2rem;
      color: #7C2D12;
    }
    input {
      color: #7C2D12;
    }
  ` : `
    svg {
      width: 24px;
      margin-left: 2rem;
      color: white;
    }
  `}

  * {
    position: absolute;
  }

  &:hover {
    background: #64748b;
    svg {
      color: white;
    }
    input {
      color: white;
    }
  }
`

const Upload = styled.input`
  position: relative;
  top: 0;
  left: 0;
  padding: 2rem 2rem 2rem 4rem;
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 12px;
  color: white;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: .9rem;

  &::-webkit-file-upload-button {
    display: none;
  }
  &::file-selector-button {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`

const FileInput: React.FC<IProps> = ({id, setData, errors}) => {
  const setInput = (e: React.ChangeEvent) => {
    if ((e.currentTarget as HTMLInputElement).files !== null) {
      let value = (e.currentTarget as HTMLInputElement).files![0];
      setData({[id]: value});
    }
  }
  return (
    <>
        {
          errors &&
            <Error>{errors[0]}</Error>
        }
      <UploadWrapper
        {...(errors ? {error: true} : {error: false})}
      >
        {NavIcons.fileIcon}<Upload type="file" id="file" onChange={setInput} />
      </UploadWrapper>
    </>
  )
}

export default FileInput;