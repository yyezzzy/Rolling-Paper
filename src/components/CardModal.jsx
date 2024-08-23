import {
  Container,
  ProfileWrap,
  Divider,
  Profile,
  Info,
  Name,
  ContentBox,
  CreatedTime,
  RelationShip,
  ConfirmButton,
} from "./StyledCardMordal";

export function CardModal(props) {
  const { sender, profileImageURL, relationship, content, font, createdAt } =
    props;

  //props로 넘어올 때 formattedDate가 넘어오면 더 깔끔할 것 같아요!
  const formattedDate = createdAt.slice(0, 10).replace(/-/g, ".");

  return (
    <Container>
      <ProfileWrap>
        <Profile src={profileImageURL} alt="profile image" />
        <Info>
          <Name>
            From.<strong>{sender}</strong>
          </Name>
          <RelationShip rel={relationship}>{relationship}</RelationShip>
        </Info>
        <CreatedTime>{formattedDate}</CreatedTime>
      </ProfileWrap>
      <Divider />
      <ContentBox font={font}>{content}</ContentBox>
      <ConfirmButton>확인</ConfirmButton>
    </Container>
  );
}
