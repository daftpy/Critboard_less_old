import styled from "styled-components";
import { Error, ErrorWrapper } from "./TextInput";

interface IProps {
  label?: string;
  placeholder?: string;
  id: string;
  name?: string;
  setData: (inputData: Object) => void;
  errors?: string[];
}

const DescriptionInput = styled.textarea`
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  padding: .5rem;
  width: 100%;
  height: 8rem;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: .9rem;
  margin-top: .5rem;
  margin-bottom: 1.5rem;

  &:focus {
    outline-color: #6ee7b7;
    filter: drop-shadow(0 0 4px #e2e8f0);
  }
`

const TextArea: React.FC<IProps> = ({label, placeholder, id, name, setData, errors}) => {
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
      {
        errors &&
          <ErrorWrapper>
            {errors.map((error) => {
              return (
                <Error>{error}</Error>
              )
            })}
          </ErrorWrapper>
      }
      <DescriptionInput
        id={id}
        placeholder={placeholder ? placeholder : ''}
        name={name ? name : id}
        onChange={setInput}
      />
    </>
  )
}

export default TextArea;