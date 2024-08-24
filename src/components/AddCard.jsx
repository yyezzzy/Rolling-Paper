import { Container, AddButton, Icon } from "./StyledAddCard";
import plusIcon from "../assets/icon/plus.png";

export function AddCard() {
  return (
    <Container>
      <AddButton>
        <Icon src={plusIcon} alt="Add Icon" />
      </AddButton>
    </Container>
  );
}
