import styled from 'styled-components';
import NavIcons from '../../../layout/navigation/NavIcons';

interface IProps {
  id: string;
  setData: (inputData: Object) => void;
  errors?: string[];
}

interface IWrapper {
  error: boolean;
}

const Wrapper = styled.div<IWrapper>`
  background: ${props => props.error == true ? '#FCA5A5' : '#f1f1f5f9;'};
  padding: 2rem;
  margin-top: .5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  ${props => props.error == true ? 'color: #F8FAFC' : null};
  ${props => props.error == true ? `
    span {
      color: #7C2D12;
      font-weight: bold;
    }
    label {
      color: #7C2D12;
    }
    p {
      color: #991B1B;
    }
  ` : `
    span {
      font-weight: bold;
      color: red;
    }
  `}
`

const PermissionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: .4rem !important;
  padding: 0;
  font-weight: bold;

  svg {
    width: 24px;
    margin-left: .5rem;
  }
`

const PermissionInput: React.FC<IProps> = ({id, setData, errors}) => {
    const setInput = (e: React.ChangeEvent) => {
      let value = (e.currentTarget as HTMLInputElement).checked;
      setData({[id]: value});
    }
  return (
    <Wrapper {...(errors ? {error: true} : {error: false})}>
      <PermissionLabel>Permission {NavIcons.justiceIcon}</PermissionLabel>
      <p>You must have permission to share this content. <span>Do not leak.</span></p>
        <PermissionLabel>
          <br />
          I have permission to share this media.
        </PermissionLabel>
        <input
          type="checkbox"
          id="permission"
          onChange={setInput}
        />
    </Wrapper>
  )
}

export default PermissionInput;