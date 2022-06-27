import styled from 'styled-components';
import { TextProps } from 'components/shows-list/components/title/title.type';

export const Title = styled.span<TextProps>`
  color: white;
  display: block;
  font-size: 24px;
  margin: 24px 0 18px;
  font-weight: ${(props) => props.fontWeight};
`;
