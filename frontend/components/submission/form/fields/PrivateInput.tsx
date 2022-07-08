import styled from 'styled-components';

interface IProps {
  id: string;
  setData: (inputData: Object) => void;
}

const Wrapper = styled.div`
  margin-top: .5rem;
  margin-bottom: 1.5rem;

  label {
    margin: 0;
  }

  p {
    margin-bottom: .5rem;
  }
`

const PrivateInput: React.FC<IProps> = ({id, setData}) => {
  const setInput = (e: React.ChangeEvent) => {
    let value = (e.currentTarget as HTMLInputElement).checked;
    setData({[id]: value});
  }
  return (
    <Wrapper>
      <label>Private Submission</label>
      <p>Only admins will be able to view your submission.</p>
      <input
        type="checkbox"
        id="private"
        onChange={setInput}
      />
    </Wrapper>
  )
}

export default PrivateInput;