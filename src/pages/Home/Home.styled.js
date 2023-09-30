import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  background-color: white;
`;

export const ImageHolder = styled.div`
  width: 100%;
  max-height: 600px;
`;

export const Title = styled.h1`
  max-width: 400px;
  position: absolute;
  margin: auto;
  text-align: center;
  top: 20%;
  left: 20%;
  font-size: 40px;
  line-height: 150%;
  color: #008080;
`;

export const ButtonLink = styled(NavLink)`
  position: absolute;
  top: 60%;
  left: 30%;
  min-width: 100px;
  padding: 10px 20px;
  background-color: #008080;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:is(:focus, :hover) {
    background: #008050;
  }
`;
