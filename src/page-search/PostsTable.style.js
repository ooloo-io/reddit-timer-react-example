import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 786px;
  margin: 20px auto;
`;

export const Headline = styled.h2`
  margin-bottom: 4px;
`;

export const Table = styled.table`
  text-align: left;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.dark};
  border-collapse: collapse;
`;

export const Row = styled.tr``;

export const HeaderColumn = styled.th`
  border: 1px solid #dddddd;
  padding: 0 12px 0 11px;
  line-height: 34px;
  font-weight: 500;
`;

export const Column = styled.td`
  height: 34px;
  padding: 0 12px;
  border: 1px solid #dddddd;
  line-height: 33px;
`;

const singleLineEllipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TitleColumn = styled(Column)`
  width: 373px;
  max-width: 373px;
  ${singleLineEllipsis}
`;

export const AuthorColumn = styled(Column)`
  width: 129px;
  max-width: 129px;
  ${singleLineEllipsis}
`;

export const Link = styled.a`
  text-decoration: none;
`;
