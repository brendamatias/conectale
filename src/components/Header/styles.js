import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 20px;
  margin-bottom: 10px;
`;
