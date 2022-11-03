import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import theme from "../../styles/theme";
import { formatString } from "../../utils/formatString";

import * as S from './styles';

export default function RepositoryDetails(){
  return (
    <S.Container>
      <Header isHeaderToBack />
      <S.Content>
        <S.Title>{formatString('appswefit/create-react-app')}</S.Title>
        <S.Description>Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.</S.Description>
        <S.Subdescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.</S.Subdescription>
        <S.Language>
          <Ionicons name="md-ellipse" size={12} color={theme.colors.red} />
          <S.LanguageTitle>Typescript</S.LanguageTitle>
        </S.Language>
      </S.Content>
      <S.Buttons>
        <Button
          width="100%"
          color={theme.colors.blue}
          background={theme.colors.white}
          title="Ver Repositório"
          iconName="link"
        />
        <Button
          width="100%"
          color={theme.colors.dark}
          background={theme.colors.yellow}
          title="Favoritar"
          iconName="star"
          style={{ marginTop: 10 }}
        />
        <Button
          hasBorder
          width="100%"
          color={theme.colors.dark}
          background={theme.colors.white}
          title="Desfavoritar"
          iconName="star-outline"
          style={{ marginTop: 10 }}
        />
      </S.Buttons>
    </S.Container>
  )
}