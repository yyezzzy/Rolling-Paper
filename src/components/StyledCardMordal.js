import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 476px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 39px;
  border-radius: 16px;
  background-color: var(--white);
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 116px;
  gap: 16px;
`;

export const Divider = styled.div`
  width: 520px;
  height: 1px;
  margin-top: -16px;
  border: 1px solid var(--gray-100);
`;

export const Profile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.div`
  font-size: 20px;
`;

export const ContentBox = styled.div`
  width: 520px;
  height: 256px;
  margin: 0 auto;
  font-family: ${({ font }) => font};
  font-size: 18px;
  line-height: 28px;
  color: var(--gray-600);
  overflow: auto;
`;

export const CreatedTime = styled.div`
  width: 70px;
  height: 20pxpx;
  margin-left: auto;
  font-size: 14px;
  color: var(--gray-400);
`;

export const RelationShip = styled.div`
  font-size: 14px;
  width: 41px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  padding: 0 8px;
  color: ${({ rel }) =>
    rel === "가족"
      ? "var(--green-500)"
      : rel === "동료"
        ? "var(--purple-600)"
        : rel === "지인"
          ? "var(--beige-500)"
          : "var(--blue-500)"};
  background-color: ${({ rel }) =>
    rel === "가족"
      ? "var(--green-100)"
      : rel === "동료"
        ? "var(--purple-100)"
        : rel === "지인"
          ? "var(--beige-100)"
          : "var(--blue-100)"};
`;

export const ConfirmButton = styled.div`
  width: 120px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  padding: 7px 16px;
  margin-top: 16px;
  border-radius: 6px;
  color: var(--white);
  background-color: var(--purple-600);
`;
