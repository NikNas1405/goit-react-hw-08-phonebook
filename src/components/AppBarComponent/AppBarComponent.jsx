import { AppBar, Box, } from '@mui/material';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../operations/useAuth';
import { Navigation } from 'components/Navigation/Navigation';

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
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </AppBar>
  );
};
