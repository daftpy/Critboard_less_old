import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: end;
  padding: 0 1rem;
  width: 100%;
`

const Input = styled.input`
  border-radius: 8px;
  padding: .7rem;
  border: 1px solid #cbd5e1;
  width: 100%;

  &:focus {
    outline-color: #6ee7b7;
    border: 1px solid #6ee7b7;
    filter: drop-shadow(0 0 4px #e2e8f0);
  }


  @media (min-width: 768px) {
    width: 100%;
    max-width: 80%;
  }
`

const SearchBar: React.FC = () => {
  return (
    <Wrapper>
      <Input type='text' placeholder='Search Submissions' />
    </Wrapper>
  )
}

export default SearchBar;