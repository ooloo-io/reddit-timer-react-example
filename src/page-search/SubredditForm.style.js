import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px 0 0;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled.input`
  width: 370px;
  height: 36px;
  margin: 0 10px;
  padding: 0 15px;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.dark};
  border: 1px solid ${(props) => props.theme.color.midLight};
`;
