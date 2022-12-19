import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  full?: boolean;
  outline?: boolean;
};

export function Button({
  title,
  icon,
  full = true,
  outline = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container full={full} outline={outline} {...rest}>
      {icon && <S.Icon isOutline={outline} name={icon} />}
      <S.Title isOutline={outline}>{title}</S.Title>
    </S.Container>
  );
}
