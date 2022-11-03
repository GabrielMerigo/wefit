import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonProps } from ".";

const modifiers = {
  hasBorder: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.dark};
  `
}


export const Container = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, background, width = '174px', hasBorder }) => css`
    width: ${width};
    height: 42px;
    border-radius: 4px;
    background: ${background};
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content:center;
    ${hasBorder && modifiers.hasBorder(theme)};
  `}
`;

export const Title = styled.Text<ButtonProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.fonts.roboto_medium};
    text-transform: uppercase;
    line-height: 40px;
    text-align: center;
    color: ${color};
  `}
`;

export const Icon = styled.View`
  margin-left: 10px;
`;