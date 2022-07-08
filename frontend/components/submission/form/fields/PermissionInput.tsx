import styled from 'styled-components';
import NavIcons from '../../../layout/navigation/NavIcons';

interface IProps {
    id: string;
    setData: (inputData: Object) => void;
  }

const Wrapper = styled.div`
  background: #f1f1f5f9;
  padding: 2rem;
  margin-top: .5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  width: 100%;
`

const PermissionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: .4rem !important;
  padding: 0;

  svg {
    width: 24px;
    margin-left: .5rem;
  }
`

const PermissionInput: React.FC<IProps> = ({id, setData}) => {
    const setInput = (e: React.ChangeEvent) => {
      let value = (e.currentTarget as HTMLInputElement).checked;
      setData({[id]: value});
    }
  return (
    <Wrapper>
      <PermissionLabel>Permission {NavIcons.justiceIcon}</PermissionLabel>
      <p>You must have permission to share this content. <span style={{color: 'red', whiteSpace: 'nowrap'}}>Do not leak.</span></p>
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