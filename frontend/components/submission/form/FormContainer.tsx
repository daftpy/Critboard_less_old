import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BackButton from './BackButton';

interface IProps {
  children?: React.ReactNode;
  visibility: boolean;
  setSelection: (selectionObject: Object) => void;
  backButton?: boolean;
  submitButton?: boolean;
  dontHide?: boolean;
  action?: () => void;
}

interface IWrapper {
  formVisibility: boolean;
  hidden: boolean;
}

const fadeIn = keyframes`
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
      opacity: 1;
  }

  100% {
      opacity: 0;
  }
`

const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1.5rem;
  max-width: 600px;
  animation: ${props => props.formVisibility ? fadeIn : fadeOut} 1s;
  animation-fill-mode: forwards;
`

const SubmitButton = styled.button`
  border-width: 0;
  border-radius: 32px;
  padding: 1rem 2rem;
  background: #94a3b8;
  color: white;
  font-weight: bold;
  font-family: 'Archivo Narrow', sans-serif;
  width: fit-content;

  &:hover {
    cursor: pointer;
    background: #64748b;
  }
`

const FormContainer: React.FC<IProps> = ({visibility, setSelection, children, backButton, submitButton, dontHide, action}) => {
  const [formHidden, hideForm] = useState<boolean>(true);
  const [initialRender, setInitial] = useState<boolean>(false);

  useEffect(() => {
    console.log('dontHide', dontHide)
    if (initialRender == true || dontHide == true) {
      setTimeout(function() {
        hideForm(!formHidden);
      },1000);
    }
    setInitial(true);
  }, [visibility]);
  return (
    <>
      {
        !formHidden &&
          <Wrapper formVisibility={visibility} hidden={formHidden}>

            {children}
            
            {
              (submitButton == undefined || backButton == true) &&
                <SubmitButton onClick={action}>Submit</SubmitButton>
            }


            {
              (backButton == undefined || backButton == true) &&
                <BackButton setSelection={setSelection} />
            }
          </Wrapper>
      }
    </>
  )
}

export default FormContainer;