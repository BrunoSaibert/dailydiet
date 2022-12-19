import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 50px 24px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
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

export const ButtonLabel = styled.Text`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
