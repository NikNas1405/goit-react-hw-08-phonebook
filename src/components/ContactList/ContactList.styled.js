import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  overflow-y: auto;
  overflow-x: hidden;
  height: 200px;
`;

export const ContactListStyled = styled.ul`
  margin-top: 20px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  padding: 4px;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0px 0px 2px 0px #008080;
  border-radius: 4px;
  background-color: #f5fcf6;
  color: #008080;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactListItemText = styled.span`
  color: #008080;
  text-transform: uppercase;
  height: 20px;
  line-height: 1;
  display: block;
  text-align: left;
  width: 100%;
  margin: 0;
`;

export const ContactListItemDeleteButton = styled.button`
  margin-left: 30px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  transition: transform 250ms ease;

  &:is(:focus, :hover) {
    transform: scale(1.1);
  }
`;

export const ImageHolder = styled.div`
  height: 120px;
  width: 120px;
  margin: 0 auto;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
`;
