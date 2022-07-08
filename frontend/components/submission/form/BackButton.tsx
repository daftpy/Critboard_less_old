import styled from "styled-components"
import NavIcons from "../../layout/navigation/NavIcons";

interface IProps {
  setSelection: (selectionObject: Object) => void;
}

const Button = styled.button`
  position: relative;
  top: -96.5%;
  left: -46%;
  border: 0;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 1rem;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 14px;
  color: #374151;
  height: 0;

  &:hover {
    cursor: pointer;
  }

  svg {
    min-height: 24px;
    width: 24px;
  }
`

const BackButton: React.FC<IProps> = (props) => {
  return (
    <Button onClick={() => props.setSelection({"formSelection": true})}>
      <div>Back</div>
      {NavIcons.leftArrow}
    </Button>
  )
}

export default BackButton;