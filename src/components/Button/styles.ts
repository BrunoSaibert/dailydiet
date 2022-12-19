import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonContainerStyleProps = {
  full: boolean;
  outline: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonContainerStyleProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ full }) =>
    full
      ? css`
          width: 100%;
        `
      : css`
          max-width: 200px;
        `}

  padding: 0 24px;

  min-height: 50px;
  max-height: 50px;

  ${({ theme, outline }) =>
    outline
      ? css`
          border: 1px solid ${theme.COLORS.GRAY_600};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `}

  border-radius: 6px;
`;

type ButtonTextStyleProps = {
  isOutline: boolean;
};

export const Title = styled.Text<ButtonTextStyleProps>`
  ${({ theme, isOutline }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${isOutline ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<ButtonTextStyleProps>(
  ({ theme, isOutline }) => ({
    size: 24,
    color: isOutline ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE,
  })
)`
  margin-right: 12px;
`;
