import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 359px;
    height: 167px;
    background: ${theme.colors.white};
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 16px 12px;
    margin-bottom: 16px;
  `}
`;

export const Header = styled.View`
 ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    padding-bottom:16px;
    border-bottom-color: ${theme.colors.gray_light};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter_regular};
  `}
`;

export const Logo = styled.Image`
  width: 29px;
  height: 29px;
  border-radius: 50px;
`;

export const DescriptionContainer = styled.View`
  margin-top: 16px;
  width: 340px;
`;


export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter_regular};
    font-size: 12px;
    color: ${theme.colors.gray_dark};
    min-width: 10px;
  `}
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FavButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 103px;
    height: 36px;
    background: ${theme.colors.yellow_light};
    border-radius: 4px;
    justify-content: space-evenly;
  `}
`;

export const FavButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter_bold};
    color: ${theme.colors.yellow};
  `}
`;

export const Stars = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StarsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_dark};
    margin-left: 6px;
  `}
`;

export const Language = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LanguageTitle = styled.Text`
  ${({ theme }) => css`
    margin-left: 6px;
    font-family: ${theme.fonts.inter_regular};
    color: ${theme.colors.gray_dark};
  `}
`;
