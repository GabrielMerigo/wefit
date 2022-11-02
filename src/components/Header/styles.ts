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