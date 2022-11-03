import styled, { css, DefaultTheme } from 'styled-components/native';
import { HeaderProps } from '.';

const modifiers = {
  isHeaderToBackBackground: (theme: DefaultTheme) => css`
    justify-content: flex-start;
    background: ${theme.colors.dark};
  `,
  isHeaderToBackFont: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    margin-left: 16px;
  `,
}

export const Container = styled.View<HeaderProps>`
  ${({ theme, isHeaderToBack }) => css`
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    background: ${theme.colors.white};

    ${isHeaderToBack && modifiers.isHeaderToBackBackground(theme)}
  `}
`;

export const Title = styled.Text<HeaderProps>`
  ${({ theme, isHeaderToBack }) => css`
    font-family: ${theme.fonts.roboto_medium};
    font-size: 20px;

    ${isHeaderToBack && modifiers.isHeaderToBackFont(theme)}
  `}
`;

export const Icon = styled.TouchableOpacity`
  background: transparent;
`;

export const ContainerButton = styled.View`
  padding: 38px 16px;
`;

export const TitleButton = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ContainerInput = styled.View`
  ${({ theme }) => css`
    width: 358px;
    height: 56px;
    background: ${theme.colors.gray_light};
    border-bottom-width: 1px;
    border-color: ${theme.colors.gray_dark};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.gray_dark};
    margin-top: 6px;
    margin-left: 12px;
  `}
`;

export const Input = styled.TextInput`
  margin-left: 12px;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.gray_dark};
    margin-top: 6px;
    margin-left: 12px;
  `}
`;