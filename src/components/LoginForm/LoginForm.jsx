import { useDispatch } from 'react-redux';

import { logIn } from 'operations/authAPI';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      logIn({
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
      })
    );
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
