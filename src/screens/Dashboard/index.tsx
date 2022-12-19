import { Button } from "@components/Button";
import { CardPercent } from "@components/CardPercent";

import logoImg from "@assets/Logo.png";

import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.Avatar source={{ uri: "https://github.com/BrunoSaibert.png" }} />
      </S.Header>

      <CardPercent percent={0.90862} />

      <S.ButtonLabel>Refeições</S.ButtonLabel>
      <Button title="Nova refeição" icon="add" onPress={() => {}} />
    </S.Container>
  );
}
