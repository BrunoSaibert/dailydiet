import { percentFormatter } from "@utils/numberFormat";

import * as S from "./styles";

const MIN_PERCENTAGE = 0.9;

type CardPercentProps = {
  percent: number;
};

export function CardPercent({ percent = 0 }: CardPercentProps) {
  const type = percent > MIN_PERCENTAGE ? "PRIMARY" : "SECONDARY";

  return (
    <S.Container type={type}>
      <S.Title>{percentFormatter(percent)}</S.Title>
      <S.Subtitle>das refeições dentro da dieta</S.Subtitle>

      <S.Icon color={type} />
    </S.Container>
  );
}
