import Link from "next/link";
import styled from "styled-components";
import { ISubmission } from "../../lib/requests";
import SubmissionRow from "./SubmissionRow";

interface IProps {
  submissions: ISubmission[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, auto);
  margin-top: 1.5rem;
  width: 100%;
`

const SubmissionTable: React.FC<IProps> = ({submissions}) => {
  return (
    <Wrapper>
      {
        submissions.map((submission) => {
          return (
            <Link key={submission.id} href={{pathname: '/submissions/view', query: {object: JSON.stringify(submission)}}}>
              <a>
                <SubmissionRow submission={submission} />
              </a>
            </Link>
          )
        })
      }
    </Wrapper>
  )
}

export default SubmissionTable;