import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type ButtonProps = {
  color: 'blue' | 'white';
  title: string;
} & TouchableOpacityProps;

export function Button({ color, title, ...props }: ButtonProps){
  return (
    <S.Container color={color} {...props}>
      <S.Title  color={color}>{title}</S.Title>
    </S.Container>
  )
}