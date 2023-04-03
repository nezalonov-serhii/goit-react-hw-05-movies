import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapHeader = styled.nav`
  background-color: #292929;
  margin-bottom: 20px;
`;

export const StyledNav = styled.nav`
  width: 1280px;
  margin: 0 auto;

  padding: 20px 15px;
  background-color: #292929;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 20px;

  &.active {
    color: orange;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
