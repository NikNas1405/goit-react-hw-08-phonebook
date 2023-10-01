import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #fff;
  }

  &.active::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0px;
    top: 40px;
    background-color: #fff;
    border-radius: 2px;
  }
`;
