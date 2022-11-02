import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';

export function Header(){
  return (
    <S.Container>
      <S.Title>WeFit</S.Title>
      <Ionicons name="settings-sharp" size={24} color={"#000000"} />
    </S.Container>
  )
}