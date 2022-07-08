import { NextPage, NextPageContext } from "next";
import BaseLayout from "../../components/layout/BaseLayout";
import { withRouter } from "next/router";
import styled from "styled-components";

interface IProps {
  router: any;
}

const ImageWrapper = styled.div`
  width: auto;

  img {
    margin: 0 auto;
    height: auto;
    max-width: 100%;
  }
`

const View: NextPage<IProps> = ({router: {query}}) => {
  const submission = JSON.parse(query.object)
  console.log(submission);
  let file;
  if (submission.submissionType == 'file') {
    file = `http://localhost:8000${submission.submissionContent.file}`
  }
  return (
    <BaseLayout>
      <h1>{submission.submissionContent.title}</h1>
      <p>{submission.submissionContent.description}</p>
      <ImageWrapper>
      {submission.submissionType === 'file' &&
        <img src={file as string} />
      }
      {submission.submissionType === 'link' &&
        <p>{submission.submissionContent.link}</p>
      }
      </ImageWrapper>
    </BaseLayout>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const {query} = context;
  return { props: {query}}
}

export default withRouter(View);