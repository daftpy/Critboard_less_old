import Link from 'next/link';
import styled from 'styled-components';
import LoginStatus from './LoginStatus';
import SearchBar from './SearchBar';
import SubmissionStatus from './SubmissionStatus';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: .5rem 0;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  > * {
    margin: .25rem 0;
  }
`

const Brand = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-size: 28px;
  font-family: 'Lobster', cursive;
`

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 14px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
  
  > * {
    margin: .75rem 1rem;
  }
`

const StatusBar: React.FC = () => {
  return (
    <Wrapper id="StatusBar">
      <Brand>
        <Link href="/">
          <a>
            Critboard
          </a>
        </Link>
      </Brand>
      <StatusWrapper>
        <SearchBar />
        <SubmissionStatus submissionsOpen={true} />
        <LoginStatus loggedIn={false} user='User' />
      </StatusWrapper>
    </Wrapper>
  )
}

export default StatusBar;