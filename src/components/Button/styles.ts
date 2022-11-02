import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonProps } from ".";

const modifiers = {
  buttonBlue: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
  `,
  buttonWhite: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
  `
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, color }) => css`
    width: 174px;
    height: 42px;
    border-radius: 4px;

    ${color === 'blue' && modifiers.buttonBlue(theme)}
    ${color === 'white' && modifiers.buttonWhite(theme)}
  `}
`;

export const Title = styled.Text<ButtonProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.fonts.roboto_medium};
    text-transform: uppercase;
    line-height: 40px;
    text-align: center;
    color: ${color === 'blue' ? theme.colors.white : theme.colors.blue}
  `}
`;