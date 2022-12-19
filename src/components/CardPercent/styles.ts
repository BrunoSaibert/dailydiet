import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

export type IconTypeStyleProps = "PRIMARY" | "SECONDARY";

type CardPercentStyleProps = {
  type: IconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<CardPercentStyleProps>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  padding: 24px;

  position: relative;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme, color }) => ({
  size: 24,
  color: color === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;
