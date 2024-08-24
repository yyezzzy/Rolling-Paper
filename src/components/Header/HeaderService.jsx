import styled from 'styled-components';
const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 68px;
  padding: 13px 0;
`;

const ServiceWrap = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const RecipientInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const HeaderService = ({ recipient }) => {
  return (
    <Container>
      {recipient && (
        <ServiceWrap>
          <p>To: {recipient.name}</p>
          <RecipientInfo>
            <p>Message Count: {recipient.messageCount}</p>
            <p>Reaction Count: {recipient.reactionCount}</p>
          </RecipientInfo>
        </ServiceWrap>
      )}
    </Container>
  );
};
