import { List, ListItem } from '@mui/material';

import { useAuth } from '../../operations/useAuth';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <List
      sx={{
        display: 'flex',
        marginLeft: '30px',
      }}
    >
      <ListItem>
        <NavLinkStyled to="/">Home</NavLinkStyled>
      </ListItem>
      <ListItem>
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </ListItem>
    </List>
  );
};
