import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  display: block;
  margin: 0 auto 8px;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;

export const Label = styled.label`
  display: block;
  color: #008080;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
`;

export const StyledFormButton = styled.button`
  padding: 10px 20px;
  background-color: #008080;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms ease;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:is(:focus, :hover) {
    opacity: 1;
  }
`;
