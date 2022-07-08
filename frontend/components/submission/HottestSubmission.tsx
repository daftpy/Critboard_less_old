import styled from "styled-components";

const Wrapper = styled.div`
  background: #f43f5e;
  border-radius: 18px;
  padding: 1rem 2.5rem 2rem 2.5rem;
  color: #f8fafc;
  min-width: 400px;
`

const HottestSubmission: React.FC = () => {
  return (
    <Wrapper>
      <h2>Hottest Submissions</h2>
      <p>submission goes here</p>
    </Wrapper>
  )
}

export default HottestSubmission;