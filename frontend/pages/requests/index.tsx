import type { NextPage } from 'next'
import BaseLayout from '../../components/layout/BaseLayout'
import OpenRequest from '../../components/submission/OpenRequest';
import { getOpenRequests, IOpenRequest } from '../../lib/requests';
import styled from 'styled-components';

const RequestsWrapper = styled.div`
  padding-top: 2.5rem;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`

const Requests: NextPage<{openRequests?: IOpenRequest[]}> = ({openRequests}) => {
  return (
    <BaseLayout>
      <h1>Open Requests</h1>
      <p style={{textAlign: 'center'}}>Below are a list of open requests you can turn into submissions. Click on an open request to get started.</p>
      <RequestsWrapper>
        {openRequests?.map((openRequest) => {
          if (openRequest.submissionType === null) {
            return (
              <OpenRequest
                key={openRequest.id}
                openRequest={openRequest}
              />
            )
          }
        })}
      </RequestsWrapper>
    </BaseLayout>
  )
}

export async function getServerSideProps(): Promise<{props: {openRequests: IOpenRequest[]}}> {
  const openRequests = await getOpenRequests();
  return {
    props: {
      openRequests
    }
  }
}

export default Requests; 