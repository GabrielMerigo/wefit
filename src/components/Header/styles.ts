import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    background: ${theme.colors.white};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.roboto_medium};
    font-size: 20px;
  `}
`;