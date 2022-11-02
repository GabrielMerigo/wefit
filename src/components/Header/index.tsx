import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';
import useModal from '../../hooks/useModal';

export function Header(){
  const { onOpen } = useModal();

  return (
    <S.Container>
      <S.Title>WeFit</S.Title>
      <S.Icon onPress={onOpen}>
        <Ionicons name="settings-sharp" size={24} color={"#000000"} />
      </S.Icon>
    </S.Container>
  )
}