import { useDispatch } from 'react-redux';
import { logOut } from 'operations/authAPI';
import { useAuth } from '../../operations/useAuth';

import { UserMenuButton, Wrapper, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Text>Welcome, {user.name}</Text>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </Wrapper>
  );
};
