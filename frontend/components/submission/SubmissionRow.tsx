import styled from "styled-components";
import { ISubmission } from "../../lib/requests";
import formatDistanceToNow from "date-fns/formatDistanceToNow";


interface IProps {
  submission: ISubmission;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  grid-template-rows: repeat(6, auto);
  text-align: center;
  padding: 1rem 1.5rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background: #f8fafc;
  }

  @media (min-width:  576px) {
    width: 100%;
    grid-template-columns: minmax(auto, 150px) minmax(250px, auto) minmax(auto, 150px) 50px;
    grid-template-rows: auto auto;
    gap: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: minmax(auto, 250px) minmax(auto, 150px) minmax(250px, auto) minmax(auto, 150px) 50px;
  }
`

const Title = styled.h4`
  grid-column: 1 / 4;
  grid-row: 2;
  width: 100%;
  margin: .5rem 0;
  text-align: center;
  margin: 0 auto;
    font-family: 'Archivo Narrow', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;


  @media (min-width:  576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1;
    grid-row: 1;
  }

  @media(min-width: 768px) {
    white-space: nowrap;
    grid-row: 1 / 3;
    text-align: left;
    justify-content: left;
  }
`

const Author = styled.div`
  grid-column: 1 / 4;
  grid-row: 3;

  @media (min-width:  576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1;
    grid-row: 2;
  }

  @media (min-width: 768px) {
    justify-content: left;
    grid-column: 2;
    grid-row: 1 /3;
  }
`

const Description = styled.div`
  grid-column: 1 / 4;
  grid-row: 4;
  margin: .5rem 0;
  width: 100%;

  @media (min-width:  576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    grid-column: 2;
    grid-row: 1 / 3;
    min-width: 0;
  }

  @media (min-width: 768px) {
    justify-content: left;
    grid-column: 3;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const SubmissionDate = styled.div`
  grid-column: 1 / 4;
  grid-row: 5;

  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3;
    grid-row: 1 / 3;
  }

  @media (min-width: 768px) {
    grid-column: 4;
  }
`

const SubmissionType = styled.div`
  grid-column: 1 / 4;
  grid-row: 6;

  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 4;
    grid-row: 1 / 3;
  }

  @media (min-width: 768px) {
    grid-column: 5;
  }
`

const SubmissionRow: React.FC<IProps> = ({submission}) => {
  return (
    <Wrapper>

      <Title>{submission.submissionContent.title}</Title>

      <Author>User</Author>

      <Description>
        <p>{submission.submissionContent.description}</p>
      </Description>

      <SubmissionDate>
          {formatDistanceToNow(new Date(submission.submissionContent.createdAt), {addSuffix: true})}
      </SubmissionDate>

      <SubmissionType>
        {submission.submissionType}
      </SubmissionType>

    </Wrapper>
  )
}

export default SubmissionRow;