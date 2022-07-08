import styled from "styled-components";

const Wrapper = styled.div`
  p {
    text-align: center;
    margin-bottom: .75rem;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`

const Twitch = styled.div`
  background: #9146FF;
  margin: 0;
  padding: .25rem 1rem;
  color: white;
  border-radius: 12px;

  &:hover {
    cursor: pointer;
  }
`

const Youtube = styled.div`
  background: #FF0000;
  padding: .25rem 1rem;
  margin:w 0;
  color: white;
  border-radius: 12px;

  &:hover {
    cursor: pointer;
  }
`

const SocialLinks: React.FC = () => {
  return (
    <Wrapper>
      <p>Feedback streamed live on</p>
      <SocialWrapper>
        <Twitch>Twitch.tv/channel</Twitch>
        <Youtube>Youtube.com/c/channel</Youtube>
      </SocialWrapper>
    </Wrapper>
  )
}

export default SocialLinks;