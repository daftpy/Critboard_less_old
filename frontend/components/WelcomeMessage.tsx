import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  background: #f1f5f9;
  border-radius: 18px;
  padding: 1rem 2.5rem 2rem 2.5rem;
  color: #475569;
`

const CallToAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

const ActionButton = styled.button`
  margin-left: 2rem;
  padding: .5rem .8rem;
  border-radius: 8px;
  border: none;
  background: #cbd5e1;
  color: #334155;
  font-family: 'Archivo Narrow', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 14px;

  &:hover {
    background: #94a3b8;
    cursor: pointer;
    color: white;
  }
`

const WelcomeMessage: React.FC = () => {
  const router = useRouter();
  const openSubmissionRequest = () => {
    let requestObject = JSON.stringify({
      "private": false
    });
    axios.post(
      'http://localhost:8000/submissions/',
      requestObject,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      router.push('/requests');
    })
    .catch(res => {
      console.log(res);
    });
  }
  return (
    <Wrapper>
      <h1>Welcome to Critboard</h1>
      <CallToAction>
        <p>Need constructive and informed feedback?</p>
        <ActionButton onClick={openSubmissionRequest}>
          Request
        </ActionButton>
      </CallToAction>
    </Wrapper>
  )
}

export default WelcomeMessage;