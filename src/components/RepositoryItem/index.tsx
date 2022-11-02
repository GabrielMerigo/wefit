import * as S from './styles'
import { Entypo, Ionicons } from '@expo/vector-icons'; 
import theme from '../../styles/theme';

export function RepositoryItem(){
  return (
    <S.Container>
      <S.Header>
        <S.Title>appswefit/create-react-app</S.Title>
        <S.Logo source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png' }} />
      </S.Header>

      <S.DescriptionContainer>
        <S.Description>Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.</S.Description>
      </S.DescriptionContainer>
      <S.Footer>
        <S.FavButton>
          <Entypo name="star" size={24} color={theme.colors.yellow} />
          <S.FavButtonTitle>Favoritar</S.FavButtonTitle>
        </S.FavButton>
        <S.Stars>
          <Entypo name="star" size={24} color={theme.colors.yellow} />
          <S.StarsTitle>0</S.StarsTitle>
        </S.Stars>
        <S.Language>
          <Ionicons name="md-ellipse" size={12} color={theme.colors.red} />
          <S.LanguageTitle>Typescript</S.LanguageTitle>
        </S.Language>
      </S.Footer>
    </S.Container>
  )
}