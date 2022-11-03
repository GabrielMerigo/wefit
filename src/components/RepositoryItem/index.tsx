// @ts-nocheck
import * as S from './styles'
import { Entypo, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../../styles/theme';
import { formatString } from '../../utils/formatString';
import { useNavigation } from '@react-navigation/native';
import { RepositoryProps } from '../../contexts/RepositoryContext';
import useRepository from '../../hooks/useRepository';

type RepositoryItemProps = {
  isFavorite?: boolean;
} & RepositoryProps;

export function RepositoryItem({ id, isFavorite, description, full_name, owner, language, stargazers_count, html_url }: RepositoryItemProps){
  const { navigate } = useNavigation();
  const collectionKey = 'wefit:favorites_repositories'
  const { 
    setFavoritesRepositories, 
    favoritesRepositories,
    repositories,
    setRepositories
  } = useRepository();

  function handleOpenDetails(){
    navigate(
      'RepositoryDetails', 
      { 
        id, 
        description,  
        full_name,
        owner,
        language,
        html_url,
        isFavorite: !!isFavorite
      }
    );
  }

  async function favoriteRepository(){
    const currentRepository = { 
      id,
      description,  
      full_name,
      owner,
      language,
      html_url,
      stargazers_count
    }

    setFavoritesRepositories(() => [
      ...favoritesRepositories, 
      currentRepository
    ])

    await AsyncStorage.setItem(collectionKey, JSON.stringify(favoritesRepositories));

    const repositoriesFiltered = repositories.filter(repository => repository.id !== id);
    setRepositories(repositoriesFiltered);
  }

  return (
    <S.Container onPress={handleOpenDetails}>
      <S.Header>
        <S.Title>{formatString(full_name)}</S.Title>
        <S.Logo source={{ uri: owner.avatar_url }} />
      </S.Header>

      <S.DescriptionContainer>
        <S.Description>{description}</S.Description>
      </S.DescriptionContainer>
      <S.Footer>
        {!isFavorite && 
          <S.FavButton onPress={favoriteRepository}>
            <Entypo name="star" size={24} color={theme.colors.yellow} />
            <S.FavButtonTitle>Favoritar</S.FavButtonTitle>
          </S.FavButton>
        }
        <S.Stars>
          <Entypo name="star" size={24} color={theme.colors.yellow} />
          <S.StarsTitle>{stargazers_count}</S.StarsTitle>
        </S.Stars>
        <S.Language>
          <Ionicons name="md-ellipse" size={12} color={theme.colors.red} />
          <S.LanguageTitle>{language}</S.LanguageTitle>
        </S.Language>
      </S.Footer>
    </S.Container>
  )
}