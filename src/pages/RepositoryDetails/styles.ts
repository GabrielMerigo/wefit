import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 16px 15px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter_regular};
    font-size: 20px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter_regular};
    font-size: 16px;
    margin-top: 16px;
    color: ${theme.colors.gray_dark};
  `}
`;

export const Subdescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter_regular};
    font-size: 16px;
    margin-top: 16px;
    color: ${theme.colors.gray_dark};
  `}
`;

export const Language = styled.View`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LanguageTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter_regular};
    font-size: 14px;
    color: ${theme.colors.gray_dark};
    margin-left: 6px;
  `}
`;

export const Buttons = styled.View`
  width: 390px;
  height: 126px;
  position: absolute;
  bottom: 0;
  padding: 10px 10px;
`;