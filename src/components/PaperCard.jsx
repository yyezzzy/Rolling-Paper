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
} from "./StyledPaperCard";

export function PaperCard(props) {
  const { sender, profileImageURL, relationship, content, font, createdAt } =
    props;

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
      </ProfileWrap>
      <Divider />
      <ContentBox font={font}>{content}</ContentBox>
      <CreatedTime>{formattedDate}</CreatedTime>
    </Container>
  );
}
