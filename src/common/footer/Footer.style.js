import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './logo-small.svg';

export const Container = styled.footer`
  width: 100%;
  max-width: 980px;
  height: 100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  font-size: ${(props) => props.theme.font.size.small};
  flex: 1;
`;

export const LeftLink = styled(FooterLink)`
  text-align: left;
`;

export const RightLink = styled(FooterLink)`
  text-align: right;
`;

export const Logo = styled(ReactComponent)`
  margin-top: -2px;
`;
