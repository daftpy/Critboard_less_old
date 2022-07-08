import styled from 'styled-components';
import BaseHead from './BaseHead';
import Image from 'next/image';
import Navigation from './navigation/Navigation';
import StatusBar from './statusbar/StatusBar';

interface IProps {
  children?: React.ReactNode;
  home?: boolean;
  head?: JSX.Element;
}

const NavWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  min-height: 100%;
  overflow-x: hidden;

  @media (min-width: 992px) {
    padding: 0 .75rem 0 2rem;
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }
`
const StatusWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  @media (min-width: 992px) {
    grid-row: 1 / 2;
  }
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
  padding: 0 1.5rem;

  @media (min-width: 992px) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    padding: 0 4.5rem;
  }
`

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  // border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
  grid-row: 4;

  @media (min-width: 992px) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: auto auto 1fr auto;

  @media (min-width: 992px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
  }
`

const BaseLayout: React.FC<IProps> = (props) => {
  
  return (
    <>
      {props.head ? (
        <>
          {props.head}
        </>
      ) : (
        <BaseHead />
      )}
      <Container id="BaseLayout">
        <NavWrapper>
          <Navigation />
        </NavWrapper>
        <StatusWrapper>
          <StatusBar />
        </StatusWrapper>
        <Main>
          {props.children}
        </Main>
        <Footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Logo>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </Logo>
          </a>
        </Footer>
      </Container>
    </>
  )
}

export default BaseLayout;