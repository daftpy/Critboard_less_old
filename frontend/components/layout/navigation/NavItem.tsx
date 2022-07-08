import Link from 'next/link';
import styled from 'styled-components';

interface IProps {
  icon: JSX.Element;
  text: string;
  link: string;
}

const Anchor = styled.a`
  display: inline-flex;
  margin: .25rem 0;
  align-items: center;
  text-align: center;
  svg {
    width: 24px;
  }
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 992px) {
    flex-direction: column;
    span {
      width: min-content;
    }
  }
`

const NavItem: React.FC<IProps> = ({icon, text, link}) => {
  return (
    <Link href={link}>
      <Anchor>
        <>{icon}</>
        <span>{text}</span>
      </Anchor>
    </Link>
  )
}

export default NavItem;