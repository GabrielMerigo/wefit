import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { Header, ModalRefProps } from "../../components/Header";
import { formatString } from "../../utils/formatString";
import { Portal } from 'react-native-portalize';
import { Linking } from 'react-native';

import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import { RepositoryProps } from "../../contexts/RepositoryContext";

import theme from "../../styles/theme";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useRepository from "../../hooks/useRepository";
import * as S from './styles';

type Routes = {
  isFavorite: boolean;
} & RepositoryProps;

export default function RepositoryDetails(){
  const { navigate, goBack } = useNavigation();
  const modalRef = useRef<ModalRefProps>(null);
  const router = useRoute();
  const collectionKey = 'wefit:favorites_repositories'

  const { 
    setFavoritesRepositories, 
    favoritesRepositories,
    repositories,
    setRepositories
  } = useRepository();

  const { 
    description, 
    owner, 
    id, 
    stargazers_count, 
    full_name, 
    language, 
    html_url, 
    isFavorite
  } = router.params as Routes;

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

    const newFavoritaRepositories = [
      ...favoritesRepositories, 
      currentRepository
    ]

    setFavoritesRepositories(newFavoritaRepositories)
    await AsyncStorage.setItem(collectionKey, JSON.stringify(newFavoritaRepositories));

    const repositoriesFiltered = repositories.filter(repository => repository.id !== id);
    setRepositories(repositoriesFiltered);

    navigate('Favoritos' as never, {} as never)
    modalRef.current?.close();
    goBack();
  }

  async function disfavorRepository() {
    const repositoriesFiltered = favoritesRepositories.filter(repository => repository.id !== id);
    setFavoritesRepositories(repositoriesFiltered);
  
    await AsyncStorage.setItem(collectionKey, JSON.stringify(repositoriesFiltered));
  
    modalRef.current?.close();
    goBack();
  }


  function closeModalFavorite(){
    modalRef.current?.close();
  }

  return (
    <>
      <Portal>
        <Modalize
          alwaysOpen={130}
          withHandle={false}
          ref={modalRef}
        >
          <S.Buttons>
            <Button
              width="100%"
              color={theme.colors.blue}
              background={theme.colors.white}
              title="Ver Repositório"
              iconName="link"
              onPress={() => Linking.openURL(html_url)}
            />
            {!isFavorite ? (
              <Button
                onPress={favoriteRepository}
                width="100%"
                color={theme.colors.dark}
                background={theme.colors.yellow}
                title="Favoritar"
                iconName="star"
                style={{ marginTop: 10 }}
              />
            ) : (
              <Button
                onPress={disfavorRepository}
                hasBorder
                width="100%"
                color={theme.colors.dark}
                background={theme.colors.white}
                title="Desfavoritar"
                iconName="star-outline"
                style={{ marginTop: 10 }}
              />
            )}
   
          </S.Buttons>
        </Modalize>
      </Portal>

      <S.Container>
        <Header closeModalFavorite={closeModalFavorite} isHeaderToBack />
        <S.Content>
          <S.Title>{formatString(full_name)}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Language>
            <Ionicons name="md-ellipse" size={12} color={theme.colors.red} />
            <S.LanguageTitle>{language}</S.LanguageTitle>
          </S.Language>
        </S.Content>
      </S.Container>
    </>
  )
}