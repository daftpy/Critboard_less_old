import React from 'react';
import styled from 'styled-components'

interface IProps {
  label?: string;
  placeholder?: string;
  type: string;
  id: string;
  name?: string;
  setData: (inputData: Object) => void;
}

const Input = styled.input`
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  padding: .5rem;
  width: 100%;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: .9rem;
  margin-top: .5rem;
  margin-bottom: 1.5rem;

  &:focus {
    outline-color: #6ee7b7;
    filter: drop-shadow(0 0 4px #e2e8f0);
  }
`

const TextInput: React.FC<IProps> = ({label, placeholder, type, id, name, setData}) => {
  const setInput = (e: React.ChangeEvent) => {
    let value = (e.currentTarget as HTMLInputElement).value;
    setData({[id]: value});
  }
  return (
    <>
      {
        label &&
          <label>{label}</label>
      }
      <Input
        type={type}
        placeholder={placeholder ? placeholder : ''}
        id={id}
        name={name ? name : id}
        onChange={setInput}
      />
    </>
  )
}

export default TextInput;