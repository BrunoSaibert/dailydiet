import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 50px 24px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  height: 36px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;
