import styled from 'styled-components';

interface IProps {
  submissionsOpen: boolean;
}

interface IWrapperProps {
  open: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  color: ${props => props.open ? '#059669;' : '#f43f5e;'}
  white-space: nowrap;
`

const SubmissionStatus: React.FC<IProps> = ({submissionsOpen}) => {
  return (
    <Wrapper open={submissionsOpen}>
      {submissionsOpen ? (
        <>
          Submissions Open
        </>
      ) : (
        <>
          Submissions Closed
        </>
      )}
    </Wrapper>
  )
}

export default SubmissionStatus;