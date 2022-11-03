import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import { useRef } from 'react';
import { Button } from '../Button';
import { Portal } from 'react-native-portalize';

export type HeaderProps = {
  isHeaderToBack?: boolean;
}

export type ModalRefProps = {
  open: () => {},
  close: () => {}
}

export function Header({ isHeaderToBack }: HeaderProps){
  const { goBack } = useNavigation();
  const modalRef = useRef<ModalRefProps>(null);

  function onOpen(){
    modalRef.current?.open();
  }

  function onClose(){
    modalRef.current?.close();
  }

  return (
    <>
      <Portal>
        <Modalize
          closeOnOverlayTap={false}
          handleStyle={{ 
            marginTop: 30,
            backgroundColor: theme.colors.gray_light,
            width: 30
          }}
          ref={modalRef}
          snapPoint={200}
        >
          <S.ContainerButton>
            <S.TitleButton>Alterar usuário selecionado</S.TitleButton>
            <S.ContainerInput>
              <S.Label>Nome do usuário</S.Label>
              <S.Input />
            </S.ContainerInput>
            <S.Buttons>
              <Button color={theme.colors.blue} title="Cancelar" background={theme.colors.white} onPress={onClose} />
              <Button color={theme.colors.white} title='Salvar' background={theme.colors.blue} />
            </S.Buttons>
          </S.ContainerButton>
        </Modalize>
      </Portal>
      <S.Container isHeaderToBack={isHeaderToBack}>
        {isHeaderToBack && (
          <S.Icon onPress={() => goBack()} style={{ marginLeft: 10 }}>
            <AntDesign name="arrowleft" size={20} color={theme.colors.white} />
          </S.Icon>
        )}
        <S.Title isHeaderToBack={isHeaderToBack}>{isHeaderToBack ? 'Detalhes' : 'WeFit'}</S.Title>
        <S.Icon onPress={onOpen}>
          {!isHeaderToBack && <Ionicons name="settings-sharp" size={24} color={theme.colors.dark} /> }
        </S.Icon>
      </S.Container>
    </>
  )
}