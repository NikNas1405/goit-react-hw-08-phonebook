import { AppBar, Box, List, ListItem, Typography } from '@mui/material';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../operations/useAuth';
import { NavLinkStyled } from './AppBarComponent.styled';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0',
          backgroundColor: '#008080',
        }}
        component={'div'}
      >
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
                <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
              </Typography>
            )}
          </ListItem>
        </List>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </AppBar>
  );
};
