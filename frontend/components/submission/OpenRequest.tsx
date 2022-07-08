import styled from 'styled-components';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { IOpenRequest } from '../../lib/requests';
import NavIcons from '../layout/navigation/NavIcons';
import Link from 'next/link';

interface IProps {
  openRequest: IOpenRequest;
}

export const Wrapper = styled.div`
  padding: 1rem 2.5rem;
  background: #e2e8f0;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e2e8f0;
  width: 300px;

  h3 {
    margin-bottom: 0;
    color: #475569;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #cbd5e1;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    min-width: 24px;
    width: 24px;
    margin-right: .5rem;
  }
`

const OpenRequest: React.FC<IProps> = ({openRequest}) => {
  return (
    <Link href={`submissions/create?id=${openRequest.id}`}>
      <a>
        <Wrapper id={`ID${openRequest.id}`}>
          <h3>Premium: {openRequest.isPremium.toString()}</h3>
          <DateWrapper>
            {NavIcons.clockIcon} <p>Requested {formatDistanceToNow(new Date(openRequest.createdAt), {addSuffix: true})}</p>
          </DateWrapper>
        </Wrapper>
      </a>
    </Link>
  )
}

export default OpenRequest;