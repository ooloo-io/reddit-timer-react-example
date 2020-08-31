import styled, { keyframes } from 'styled-components';
import Container from '../common/container';
import { ReactComponent as UnstyledSpinner } from './loading-spinner.svg';

export const LoadingContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 56px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled(UnstyledSpinner)`
  animation: ${rotate} 1.5s linear infinite;
`;

export const ErrorContainer = styled(Container)`
  padding: 30px;
  text-align: center;
  color: red;
  font-size: ${(props) => props.theme.font.size.small};
`;
