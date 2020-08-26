import styled, { keyframes } from 'styled-components';
import { ReactComponent as UnstyledSpinner } from './loading-spinner.svg';

export const LoadingContainer = styled.div`
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

export const ErrorContainer = styled.div`
  padding: 30px;
  color: red;
  font-size: ${(props) => props.theme.font.size.small};
`;
