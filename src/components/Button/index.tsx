import { TouchableOpacityProps } from 'react-native';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 
import theme from '../../styles/theme';
import * as S from './styles';

export type ButtonProps = {
  color: string;
  background?: string;
  title: string;
  iconName?: string;
  width?: string;
  hasBorder?: boolean;
} & TouchableOpacityProps;

export function Button({ 
  color, 
  title, 
  background = theme.colors.white, 
  iconName,
  width,
  hasBorder,
  ...props 
}: ButtonProps){
  return (
    <S.Container hasBorder={hasBorder} width={width} background={background} color={color} {...props}>
      <S.Title color={color}>{title}</S.Title>
      {iconName === "star" && <S.Icon><Entypo name="star" size={20} color={theme.colors.dark} /></S.Icon>}
      {iconName === "link" && <S.Icon><Feather name="link-2" size={20} color={theme.colors.blue} /></S.Icon>}
      {iconName === "star-outline" && <S.Icon><Ionicons name="star-outline" size={20} color={theme.colors.dark} /></S.Icon>}
    </S.Container>
  );
}