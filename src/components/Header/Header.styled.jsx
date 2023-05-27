import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
`;

export const NavLinkBtns = styled(NavLink)`
  display: inline-block;
  padding: 25px 15px 25px 15px;
`;
