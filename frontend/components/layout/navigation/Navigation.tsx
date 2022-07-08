import styled from 'styled-components';
import NavItem from './NavItem';
import NavIcons from './NavIcons';

const Nav = styled.nav`
  display: flex;
  padding: 1rem 0;
  min-width: 100%;
  min-height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;

  @media (min-width: 992px) {
    flex-direction: column;
  }
`

const Navigation: React.FC = () => {
  return (
    <Nav id="Navigation">
      <NavItem text="Request Feedback" link="/requests" icon={NavIcons.requestIcon} />
      <NavItem text="My Submissions" link="/my_submissions" icon={NavIcons.submissionsIcon} />
      <NavItem text="Search Submissions" link="/search" icon={NavIcons.searchIcon} />
    </Nav>
  )
}

export default Navigation;