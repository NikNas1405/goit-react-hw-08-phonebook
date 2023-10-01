import { List, ListItem, Typography } from '@mui/material';

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
        <Typography>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </Typography>
      </ListItem>
      <ListItem>
        {isLoggedIn && (
          <Typography>
            <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
          </Typography>
        )}
      </ListItem>
    </List>
  );
};
