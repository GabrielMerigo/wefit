import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';
import useModal from '../../hooks/useModal';
import { AntDesign } from '@expo/vector-icons'; 
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';

export type HeaderProps = {
  isHeaderToBack?: boolean;
}

export function Header({ isHeaderToBack }: HeaderProps){
  const { onOpen } = useModal();
  const { goBack } = useNavigation();

  return (
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
  )
}