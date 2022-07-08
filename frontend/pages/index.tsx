import type { NextPage } from 'next'
import styled from 'styled-components'
import BaseLayout from '../components/layout/BaseLayout'
import SocialLinks from '../components/SocialLinks'
import HottestSubmission from '../components/submission/HottestSubmission'
import SubmissionTable from '../components/submission/SubmissionTable'
import WelcomeMessage from '../components/WelcomeMessage'
import { getSubmissions, ISubmission } from '../lib/requests'

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const RecentSubmissions = styled.div`
  width: 100%;
  margin-top: 3rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    h2 {
      margin-left: 1.5rem;
    }
  }
`

const Home: NextPage<{submissions: ISubmission[]}> = ({submissions}) => {
  return (
    <BaseLayout>
      <TopWrapper>
        <WelcomeMessage />
        <HottestSubmission />
      </TopWrapper>
      <SocialLinks />
      <RecentSubmissions>
        <h2>Recent Submissions</h2>
        <SubmissionTable submissions={submissions} />
      </RecentSubmissions>
    </BaseLayout>
  )
}

export async function getServerSideProps(): Promise<{props: {submissions: ISubmission[]}}> {
  const submissions = await getSubmissions();
  return {
    props: {
      submissions
    }
  }
}

export default Home;