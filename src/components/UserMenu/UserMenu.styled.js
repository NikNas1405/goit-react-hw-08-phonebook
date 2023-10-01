import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
  gap: 10px;
`;

export const Text = styled.p`
  display: inline-block;
`;

export const UserMenuButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms ease;
  cursor: pointer;
  color: #008080;
  font-weight: 700;
  text-transform: uppercase;

  &:is(:focus, :hover) {
    opacity: 1;
  }
`;
