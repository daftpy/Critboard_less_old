import Link from 'next/link';
import styled from 'styled-components';
import NavIcons from '../navigation/NavIcons';

interface IProps {
  loggedIn: boolean;
  user: string;
}

const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  svg {
    margin-left: .25rem;
    width: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`

const LoginStatus: React.FC<IProps> = ({loggedIn, user}) => {
  return (
    <div>
      {loggedIn ? (
        <Link href={`/user/${user}`}>
          <Wrapper>
            {user}
            {NavIcons.userIcon}
          </Wrapper>
        </Link>
      ) : (
        <Link href={`/user/${user}`}>
          <Wrapper>
            Login
            {NavIcons.loginIcon}
          </Wrapper>
        </Link>
      )}
    </div>
  )
}

export default LoginStatus;